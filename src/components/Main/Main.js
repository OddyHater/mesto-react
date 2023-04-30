import React, { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import AppApi from "../../utils/api";
import Card from "../Card/Card";


function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {  

  const [cards, setCards] = useState([]);

  const userData = useContext(CurrentUserContext);

  useEffect(() => {
    AppApi.getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img src={userData.avatar} alt="Ваш аватар" className="profile__avatar"/>
          <div className="profile__avatar-edit" onClick={onEditAvatar}></div>
        </div>
        <div className="profile__info">
          <div className="profile__edit">
            <h1 className="profile__name">{userData.name}</h1>
            <button type="button" aria-label="Редактировать профиль" className="profile__edit-button clickable" onClick={onEditProfile}></button>
          </div> 
          <p className="profile__description">{userData.about}</p>
        </div>
        <button type="button" aria-label="Добавить карточку" className="profile__add-button clickable" onClick={onAddPlace}></button>
      </section>
      <section className="cards">
        <ul className="cards__list">
          {cards.map((card) =>
            <Card
              key={card._id}
              card={card}
              onCardClick={(card) => onCardClick(card)}
            />
          )}
        </ul>
      </section>
    </main>
  )
}

export default Main