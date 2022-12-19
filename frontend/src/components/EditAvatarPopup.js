import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const [buttonText, setButtonText] = useState('');

  const avatarRef = React.useRef();

  React.useEffect(() => {
    avatarRef.current.value = '';

    setButtonText('Сохранить');
  }, [isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();

    setButtonText('Сохранение...');

    onUpdateAvatar(avatarRef.current.value);
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Обновить аватар"
      name="update-avatar"
      buttonText={buttonText}
    >
      <fieldset className="form__fieldset">
        <input
          ref={avatarRef}
          className="form__input form__input_type_avatar"
          type="url"
          name="form__input_type_avatar"
          placeholder="Ссылка на картинку"
          id="form__input_type_avatar"
          required
        />
        <span
          className="form__input-error"
          id="form__input_type_avatar-error"
        ></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
