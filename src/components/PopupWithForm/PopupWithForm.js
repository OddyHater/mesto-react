import React from "react";

function PopupWithForm({title, name, children}) {
  return(
    <div className={`popup popup-${name}`}>
      <div className={`popup__container`}>
      <h2 className="popup__title">{title}</h2>
        <form name={name} className="popup__form" noValidate>
          {children}
        </form>
          <button
            type="button"
            aria-label="Закрыть"
            className="popup__close-button clickable">

          </button>
      </div>
    </div>
    )
}

export default PopupWithForm;
