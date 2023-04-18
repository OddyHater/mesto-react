import React from "react";

function Main({onEditProfile, onAddPlace, onEditAvatar}) {  
  return (
    <main className="content"> 
      <section className="profile">
        <div className="profile__avatar-container">
          <img src=" " alt="Ваш аватар" className="profile__avatar"/>
          <div className="profile__avatar-edit" onClick={onEditAvatar}></div>
        </div>
        <div className="profile__info">
          <div className="profile__edit">
            <h1 className="profile__name">Жак-Жак Доширак</h1>
            <button type="button" aria-label="Редактировать профиль" className="profile__edit-button clickable" onClick={onEditProfile}></button>
          </div> 
          <p className="profile__description">Исследователь</p>
        </div>
        <button type="button" aria-label="Добавить карточку" className="profile__add-button clickable" onClick={onAddPlace}></button>
      </section>
      <section className="cards">
        <ul className="cards__list">
      
        </ul>
      </section>
    </main>
  )
}

export default Main