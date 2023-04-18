import React, { useEffect } from "react";
import AppApi from "../../utils/api";
import Card from "../Card/Card";


function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');

  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    AppApi.getProfileInfo()
      .then((res) => {        
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
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

  return (
    
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img src={userAvatar} alt="Ваш аватар" className="profile__avatar"/>
          <div className="profile__avatar-edit" onClick={onEditAvatar}></div>
        </div>
        <div className="profile__info">
          <div className="profile__edit">
            <h1 className="profile__name">{userName}</h1>
            <button type="button" aria-label="Редактировать профиль" className="profile__edit-button clickable" onClick={onEditProfile}></button>
          </div> 
          <p className="profile__description">{userDescription}</p>
        </div>
        <button type="button" aria-label="Добавить карточку" className="profile__add-button clickable" onClick={onAddPlace}></button>
      </section>
      <section className="cards">
        <ul className="cards__list">
          {cards.map((card) =>
            <Card
              key={card.id}
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