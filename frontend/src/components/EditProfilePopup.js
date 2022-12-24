import React from 'react';
import { useState } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../../src/contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);

  const [buttonText, setButtonText] = useState('');

  React.useEffect(() => {
    setName(currentUser.name);

    setDescription(currentUser.about);

    setButtonText('Сохранить');
  }, [currentUser]);

  const [name, setName] = useState('');

  const [description, setDescription] = useState('');

  function handleSubmit(evt) {
    evt.preventDefault();

    setButtonText('Сохранение...');

    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Редактировать профиль"
      name="edit-profile"
      buttonText={buttonText}
    >
      <fieldset className="form__fieldset">
        <input
          className="form__input form__input_type_name"
          value={name || ''}
          onChange={(evt) => {
            setName(evt.target.value);
          }}
          placeholder="Имя пользователя"
          type="text"
          name="form__input_type_name"
          id="form__input_type_name"
          minLength="2"
          maxLength="40"
          required
        />
        <span
          className="form__input-error"
          id="form__input_type_name-error"
        ></span>
        <input
          className="form__input form__input_type_job"
          value={description || ''}
          onChange={(evt) => {
            setDescription(evt.target.value);
          }}
          placeholder="Краткое описание"
          type="text"
          name="form__input_type_job"
          id="form__input_type_job"
          minLength="2"
          maxLength="200"
          required
        />
        <span
          className="form__input-error"
          id="form__input_type_job-error"
        ></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
