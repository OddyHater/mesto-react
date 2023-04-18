import React from "react";

function ImagePopup() {
  return(
    <div className="popup popup-image" id="popup-image">
        <div className="popup-image__container popup__container">
          <figure className="popup-image__picture-set">
            <img src="#" alt=" " className="popup-image__image"/>
            <figcaption className="popup-image__caption"></figcaption>
          </figure>
          <button type="button" aria-label="Закрыть" className="popup__close-button clickable"></button>
        </div>
    </div>
  )
}

export default ImagePopup;