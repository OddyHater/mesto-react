import React from "react";
import { useRef, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function EditAvatarPopup({isOpen, onClose, onAvatarUpdate}) {

  const avatarRef = useRef();
  const currentUser = useContext(CurrentUserContext);

  function handleSubmit(evt) {
    evt.preventDefault();

    onAvatarUpdate({
      name: currentUser.name,   //избегаем бага с отсутствием 
      about: currentUser.about, //имени и описания после обновления аватара ...
      avatar: avatarRef.current.value // ... и обновляем аватар
    })

    onClose();
  } 

  return(

    <PopupWithForm
      name="edit-avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Сохранить"
      onSubmit={handleSubmit}>

      <input
        type="url"
        name="link"
        className="popup__input popup__input_type_description"
        placeholder="Ссылка на картинку"
        required
        ref={avatarRef}
        id="avatar-link"
      />

      <span
        className="avatar-link-error">
      </span>

    </PopupWithForm>
  )
}

export default EditAvatarPopup;