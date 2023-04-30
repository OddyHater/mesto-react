import React, { createContext, useEffect, useState } from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import PopupWithForm from './PopupWithForm/PopupWithForm';
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

  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  useEffect(() => {
    AppApi.getProfileInfo()
      .then((res) => {
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
      />

      <Footer />

      <PopupWithForm
      title='Редактировать профиль'
      name='profile'
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}
      buttonText="Сохранить">
      
      <input type="text"
      name="name"
      className="popup__input popup__input_type_name"
      id="profile-name"
      placeholder="Имя"
      required
      minLength="2"
      maxLength="40"
      />

      <span 
      className="profile-name-error">
      </span>

      <input 
      type="text"
      name="link"
      className="popup__input popup__input_type_description"
      id="profile-email"
      placeholder="О себе"
      required
      minLength="2"
      maxLength="200"
      />

      <span
      className="profile-email-error">
      </span>          

      </PopupWithForm>

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
