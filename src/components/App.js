import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import PopupWithForm from './PopupWithForm/PopupWithForm';
import EditProfilePopup from './EditProfilePopup/EditProfilePopup';
import ImagePopup from './ImagePopup/ImagePopup';
import AppApi from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { CardContext } from '../contexts/CardsContext';

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  const closeAllPopups = () => {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  useEffect(() => {
    AppApi.getProfileInfo()
      .then((res) => {
        console.log(res);
        setCurrentUser(res);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    AppApi.getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    if(isLiked) {
      AppApi.removeLike(card._id)
        .then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c))
        })
        .catch((err) => console.log(err));
    } else {
      AppApi.addLike(card._id)
        .then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c))
        })
        .catch((err) => console.log(err));
    }
  }

  function handleCardDelete(card) {
    AppApi.removeCardFromServer(card._id)
      .then(() => {
        const newCards = cards.filter((c) => {
          return (c._id !== card._id); //Находим удаляемую карточку по id ...
        })
        setCards(newCards); //... и обновляем стейт
      })
      .catch((err) => console.log(err));
  }

  function handleUpdateUser(data) {
    AppApi.changeProfileInfo(data);

    setCurrentUser(data);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CardContext.Provider value={cards}>
        
      <body className="page">

      <Header />

      <Main
        onEditProfile={() => {setEditProfilePopupOpen(true)}}
        onAddPlace={() => {setAddPlacePopupOpen(true)}}
        onEditAvatar={() => {setEditAvatarPopupOpen(true)}}
        onCardClick={(card) => handleCardClick(card)}
        onCardLike={(card) => handleCardLike(card)}
        onCardDelete={(card) => handleCardDelete(card)}
      />

      <Footer />

      <EditProfilePopup 
        isOpen={isEditProfilePopupOpen} 
        onClose={closeAllPopups} 
        onUpdateUser={handleUpdateUser}/>

      <PopupWithForm
        name="new-card"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonText="Создать">
      
      <input
        type="text"
        name="name"
        className="popup__input popup__input_type_name"
        id="card-name"
        placeholder="Название"
        required minLength="2"
        maxLength="30"
      />

      <span
        className="card-name-error">
      </span>

      <input
        type="url"
        name="link"
        className="popup__input popup__input_type_description"
        placeholder="Ссылка на картинку"
        required id="card-url"
      />

      <span
        className="card-url-error">
      </span>      

      </PopupWithForm>

      <PopupWithForm
        name="delete"
        title="Вы уверены?"
        onClose={closeAllPopups}
        buttonText="Да">
              
      </PopupWithForm>

      <PopupWithForm
        name="edit-avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить">

      <input
        type="url"
        name="link"
        className="popup__input popup__input_type_description"
        placeholder="Ссылка на картинку"
        required
        id="avatar-link"
      />
      <span
        className="avatar-link-error">
      </span>

      </PopupWithForm>

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />

      </body>
      </CardContext.Provider>
    </CurrentUserContext.Provider>    
  );
}

export default App;
