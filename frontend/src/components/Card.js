import React from 'react';
import { CurrentUserContext } from '../../src/contexts/CurrentUserContext';

function Card({ card, onCardClick, onCardLike, onSubmitDelete }) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;

  const cardDeleteButtonClassName = `element__delete ${
    isOwn ? 'element__delete_visible' : 'element__delete_hidden'
  }`;

  const isLiked = card.likes.some((like) => like._id === currentUser._id);

  const cardLikeButtonClassName = `element__like ${
    isLiked ? 'element__like_active' : ''
  }`;

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onSubmitDelete(card);
  }

  return (
    <article className="element">
      <img
        className="element__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />

      <h2 className="element__title">{card.name}</h2>

      <button
        className={cardDeleteButtonClassName}
        type="button"
        aria-label="Удалить"
        onClick={handleDeleteClick}
      ></button>

      <button
        className={cardLikeButtonClassName}
        type="button"
        aria-label="Нравится"
        onClick={handleLikeClick}
      ></button>

      <p className="element__like-counter">{card.likes.length}</p>
    </article>
  );
}

export default Card;
