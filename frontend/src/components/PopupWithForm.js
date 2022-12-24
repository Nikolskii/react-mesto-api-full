function PopupWithForm({
  name,
  title,
  children,
  buttonText,
  isOpen,
  onClose,
  onSubmit,
}) {
  return (
    <section
      className={`popup popup_purpose_${name} ${isOpen && 'popup_opened'}`}
      aria-label={title}
    >
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>

        <form
          className={`form form_purpose_${name}`}
          onSubmit={onSubmit}
          name={name}
        >
          {children}

          <button className="form__button" type="submit" value={buttonText}>
            {buttonText}
          </button>
        </form>

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

export default PopupWithForm;
