import React, { useState } from 'react';

function SubmitDeletePopup({ isOpen, onClose, onSubmitDelete, card }) {
  const [buttonText, setButtonText] = useState('');

  React.useEffect(() => {
    setButtonText('Да');
  }, [isOpen]);

  function handleClick() {
    onSubmitDelete(card);

    setButtonText('Удаление...');
  }

  return (
    <section
      className={`popup popup_purpose_submit ${isOpen && 'popup_opened'}`}
      aria-label="Подтверждение удаления"
    >
      <div className="popup__container">
        <h2 className="popup__title">Вы уверены?</h2>
        <button
          className="popup__button"
          type="submit"
          value="Да"
          onClick={handleClick}
        >
          {buttonText}
        </button>
        <button
          className="popup__close-button"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>
      </div>
    </section>
  );
}

export default SubmitDeletePopup;
