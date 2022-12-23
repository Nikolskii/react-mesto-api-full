export const BASE_URL = 'https://api.mesto-nikolsky.nomoredomains.club';

const checkResponse = (res) =>
  res.ok ? res.json() : Promise.reject(`Ошибка: ${res.statusText}`);

export const register = ({ email, password }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    // credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      password,
      email,
    }),
  }).then(checkResponse);
};

export const login = ({ email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    // credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      password: password,
      email: email,
    }),
  }).then(checkResponse);
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    // credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};
