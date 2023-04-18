import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import PopupWithForm from './PopupWithForm/PopupWithForm';

function App() {
  return (
    <body className="page">
      <Header />
      <Main />
      <Footer />
      <PopupWithForm      
        title='Редактировать профиль'
        name='profile'>

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
      
      <div className="popup popup-new-card" id="popup-new-card">
        <div className="popup__container">
          <h2 className="popup__title">Новое место</h2>
          <form name="add-card" className="popup__form" id="popup-add" noValidate>
            <input type="text" name="name" className="popup__input popup__input_type_name" id="card-name" placeholder="Название" required minLength="2" maxLength="30"/>
            <span className="card-name-error"></span>
            <input type="url" name="link" className="popup__input popup__input_type_description" placeholder="Ссылка на картинку" required id="card-url"/>
            <span className="card-url-error"></span>
            <button type="submit" className="popup__submit popup__submit_inactive" disabled>Создать</button>
          </form>
          <button type="button" aria-label="Закрыть" className="popup__close-button clickable"></button>
        </div>
      </div>
      <div className="popup popup-image" id="popup-image">
        <div className="popup-image__container popup__container">
          <figure className="popup-image__picture-set">
            <img src="#" alt=" " className="popup-image__image"/>
            <figcaption className="popup-image__caption"></figcaption>
          </figure>
          <button type="button" aria-label="Закрыть" className="popup__close-button clickable"></button>
        </div>
      </div>
      <div className="popup popup-delete" id="popup-delete">
        <div className="popup__container popup-delete__container">
          <p className="popup-delete__text">Вы уверены?</p>
          <button type="submit" aria-label="Да" className="popup__submit popup-delete__submit clickable">Да</button>
          <button type="button" aria-label="Закрыть" className="popup__close-button clickable"></button>
        </div>
      </div>
      <div className="popup popup-edit-avatar" id="popup-edit-avatar">
        <div className="popup-edit-avatar__container popup__container">
          <h2 className="popup__title">Обновить аватар</h2>
          <form name="edit-avatar" className="popup__form" id="popup-edit" noValidate>
            <input type="url" name="link" className="popup__input popup__input_type_description" placeholder="Ссылка на картинку" required id="avatar-link"/>
            <span className="avatar-link-error"></span>
            <button type="submit" className="popup__submit popup__submit_inactive" disabled>Сохранить</button>
          </form>
          <button type="button" aria-label="Закрыть" className="popup__close-button clickable"></button>
        </div>
      </div>
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
