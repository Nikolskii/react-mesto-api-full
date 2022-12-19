import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../../src/contexts/CurrentUserContext';

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onSubmitDelete,
  cards,
  onCardClick,
  onCardLike,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <img
          className="profile__avatar"
          src={currentUser.avatar}
          alt="Аватар"
        />

        <button
          className="profile__update-button"
          onClick={onEditAvatar}
        ></button>

        <h1 className="profile__title">{currentUser.name}</h1>

        <button
          className="profile__edit-button"
          type="button"
          aria-label="Редактировать профиль"
          onClick={onEditProfile}
        ></button>

        <p className="profile__subtitle">{currentUser.about}</p>

        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить фотографию"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="elements" aria-label="Места">
        {cards.map((card) => {
          return (
            <Card
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onSubmitDelete={onSubmitDelete}
              card={card}
              key={card._id}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Main;
