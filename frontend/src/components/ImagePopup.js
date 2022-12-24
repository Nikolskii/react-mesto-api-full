function ImagePopup({ card, onClose }) {
  return (
    <section
      className={`popup popup_purpose_open-image ${
        card.name && 'popup_opened'
      }`}
      aria-label="Большое изображение"
    >
      <div className="popup__container-image">
        <figure className="popup__figure">
          <img className="popup__image" src={card.link} alt={card.name} />

          <figcaption className="popup__caption">{card.name}</figcaption>
        </figure>

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

export default ImagePopup;
