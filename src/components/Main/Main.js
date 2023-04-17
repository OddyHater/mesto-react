import React from "react";

function Main() {
    
    const handleEditAvatarClick = () => {
        document.querySelector('#popup-edit-avatar').classList.add('popup_opened');        
    }

    const handleEditProfileClick = () => {
        document.querySelector('#popup-profile').classList.add('popup_opened');
    }

    const handleAddPlaceClick = () => {
        document.querySelector('#popup-new-card').classList.add('popup_opened');
    }

    return (
        <main className="content"> 
        <section className="profile">
          <div className="profile__avatar-container">
            <img src=" " alt="Ваш аватар" className="profile__avatar"/>
            <div className="profile__avatar-edit" onClick={handleEditAvatarClick}></div>
          </div>
          <div className="profile__info">
            <div className="profile__edit">
              <h1 className="profile__name">Жак-Жак Доширак</h1>
              <button type="button" aria-label="Редактировать профиль" className="profile__edit-button clickable" onClick={handleEditProfileClick}></button>
            </div> 
            <p className="profile__description">Исследователь</p>
          </div>
          <button type="button" aria-label="Добавить карточку" className="profile__add-button clickable" onClick={handleAddPlaceClick}></button>
        </section>
        <section className="cards">
          <ul className="cards__list">
        
          </ul>
        </section>
      </main>
    )
}

export default Main