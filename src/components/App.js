import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import PopupWithForm from './PopupWithForm/PopupWithForm';
import ImagePopup from './ImagePopup/ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);

  const closeAllPopups = () => {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
  }

  return (
    <body className="page">
      <Header />

      <Main 
        onEditProfile={() => {setEditProfilePopupOpen(true)}}
        onAddPlace={() => {setAddPlacePopupOpen(true)}}
        onEditAvatar={() => {setEditAvatarPopupOpen(true)}}
      />

      <Footer />

      <PopupWithForm      
        title='Редактировать профиль'
        name='profile'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>

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

          <button
            type="submit"
            className="popup__submit">
              Сохранить
          </button>

      </PopupWithForm>

      <PopupWithForm
        name="new-card"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>

        <input
          type="text"
          name="name"
          className="popup__input popup__input_type_name"
          id="card-name"
          placeholder="Название"
          required minLength="2"
          maxLength="30"/>

        <span
        className="card-name-error">
        </span>

        <input
          type="url"
          name="link"
          className="popup__input popup__input_type_description"
          placeholder="Ссылка на картинку"
          required id="card-url"/>

        <span
          className="card-url-error">
        </span>

        <button 
          type="submit" 
          className="popup__submit popup__submit_inactive" 
          disabled>
            Создать
        </button>

      </PopupWithForm>

      <PopupWithForm
        name="delete"
        title="Вы уверены?"
        onClose={closeAllPopups}>
          <button
            type="submit"
            aria-label="Да"
            className="popup__submit popup-delete__submit clickable">
              Да
          </button>
          
      </PopupWithForm>

      <PopupWithForm
        name="edit-avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
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

          <button
            type="submit"
            className="popup__submit popup__submit_inactive"
            disabled>
              Сохранить
          </button>
      </PopupWithForm>

      <ImagePopup />
      
      
      <template className="template">
        <li className="card">
          <img src="#" alt=" " className="card__image"/>
          <div className="card__info">
            <h3 className="card__name"></h3>
            <div className="card__like-wrapper">
              <button type="button" aria-label="Лайк" className="card__like"></button>
              <span className="card__like-number">0</span>
            </div>
          </div>
          <button type="button" aria-label="Удалить карточку" className="card__trash-button clickable"></button>
        </li>
      </template>
    </body>
  );
}

export default App;
