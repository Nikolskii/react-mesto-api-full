import { Link, Route, Routes } from 'react-router-dom';
import logo from '../images/header-logo.svg';

function Header({ loggedIn, onSignout, email }) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип проекта Место" />

      <Routes>
        <Route
          exact
          path="sign-in"
          element={
            <Link className="header__link" to="/sign-up">
              Регистрация
            </Link>
          }
        />

        <Route
          exact
          path="sign-up"
          element={
            <Link className="header__link" to="/sign-in">
              Войти
            </Link>
          }
        />

        <Route
          path="/"
          element={
            <div className="header__auth">
              <p className="header__email">{email}</p>
              <button onClick={onSignout} className="header__button">
                Выйти
              </button>
            </div>
          }
        />
      </Routes>
    </header>
  );
}

export default Header;
