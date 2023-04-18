import React from "react";

function Card({card, onCardClick}) {
  
  return (
    <li className="card">
      <img 
        src={card.link}
        alt={card.name}
        className="card__image"
        onClick={() => onCardClick(card)}
      />
      <div className="card__info">
        <h3 className="card__name">{card.name}</h3>
        <div className="card__like-wrapper">
          <button type="button" aria-label="Лайк" className="card__like"></button>
          <span className="card__like-number">{card.likes.length}</span>
        </div>
      </div>
      <button type="button" aria-label="Удалить карточку" className="card__trash-button clickable"></button>
    </li>    
  )
};

export default Card;