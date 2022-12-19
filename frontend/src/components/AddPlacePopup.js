import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState('');

  const [link, setLink] = useState('');

  const [buttonText, setButtonText] = useState('');

  React.useEffect(() => {
    setName('');
    setLink('');
    setButtonText('Создать');
  }, [isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();

    setButtonText('Сохранение...');

    onAddPlace({ name, link });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Новое место"
      name="add-card"
      buttonText={buttonText}
    >
      <fieldset className="form__fieldset">
        <input
          onChange={(evt) => {
            setName(evt.target.value);
          }}
          value={name}
          className="form__input form__input_type_place"
          type="text"
          name="form__input_type_place"
          placeholder="Название"
          id="form__input_type_place"
          minLength="2"
          maxLength="30"
          required
        />
        <span
          className="form__input-error"
          id="form__input_type_place-error"
        ></span>
        <input
          onChange={(evt) => {
            setLink(evt.target.value);
          }}
          value={link}
          className="form__input form__input_type_link"
          type="url"
          name="form__input_type_link"
          placeholder="Ссылка на картинку"
          id="form__input_type_link"
          required
        />
        <span
          className="form__input-error"
          id="form__input_type_link-error"
        ></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
