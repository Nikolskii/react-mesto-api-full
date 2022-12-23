class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkServerResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  _getHeaders() {
    return {
      authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    };
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: this._getHeaders(),
    }).then((res) => this._checkServerResponse(res));
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'GET',
      credentials: 'include',
      headers: this._getHeaders(),
    }).then((res) => this._checkServerResponse(res));
  }

  updateUserInfo(userData) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: userData.name,
        about: userData.about,
      }),
    }).then((res) => this._checkServerResponse(res));
  }

  updateUserAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      credentials: 'include',
      headers: this._getHeaders(),
      body: JSON.stringify({
        avatar: avatar,
      }),
    }).then((res) => this._checkServerResponse(res));
  }

  addCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      credentials: 'include',
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then((res) => this._checkServerResponse(res));
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._getHeaders(),
    }).then((res) => this._checkServerResponse(res));
  }

  changeLikeCardStatus(cardId, isLiked) {
    if (isLiked) {
      return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
        method: 'DELETE',
        credentials: 'include',
        headers: this._getHeaders(),
      }).then((res) => this._checkServerResponse(res));
    } else {
      return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
        method: 'PUT',
        credentials: 'include',
        headers: this._getHeaders(),
      }).then((res) => this._checkServerResponse(res));
    }
  }
}

export const api = new Api({
  baseUrl: 'https://api.mesto-nikolsky.nomoredomains.club',
});
