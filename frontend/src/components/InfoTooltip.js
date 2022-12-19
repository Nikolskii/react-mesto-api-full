import successImg from '../images/registration-success.svg';
import unsuccessImg from '../images/registration-unsuccess.svg';

function InfoTooltip({ isOpen, onClose, isResponseSuccess, loading, text }) {
  return (
    <section
      className={`popup ${isOpen && 'popup_opened'}`}
      aria-label="Результат запроса"
    >
      <div className="popup__container popup__container_type_reg">
        {loading ? (
          <h2 className="popup__title popup__title_place_reg">Загрузка...</h2>
        ) : (
          <>
            <img
              className="popup__reg-image"
              src={isResponseSuccess ? successImg : unsuccessImg}
              alt="Авторизация"
            />

            <h2 className="popup__title popup__title_place_reg">{text}</h2>
          </>
        )}

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

export default InfoTooltip;
