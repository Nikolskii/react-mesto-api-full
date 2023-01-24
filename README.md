# Mesto

## Учебный проект курса «Веб‑разработчик» от Яндекс.Практикум

- Frontend [https://mesto-nikolsky.nomoredomains.club/](https://mesto-nikolsky.nomoredomains.club/)
- Backend [https://api.mesto-nikolsky.nomoredomains.club/](https://api.mesto-nikolsky.nomoredomains.club/)

«Mesto» – React-приложение с возможностью регистрации, редактирования профиля, добавления и удаления фотокарточек.

### Функционал

- Регистрация и авторизация пользователей.
- Редактирование данных пользователя (имя, описание, аватар).
- Добавление и удаление фотокарточек. Реализована возможность удаления фотокарточек, исключительно созданных пользователем.
- Постановка и снятие лайков.

### Технологии

#### Front-end
- Продвинутая семантика HTML
- Адаптивная верстка CSS (Flexbox, Grid Layout, Media Queries)
- Файловая структура Nested БЭМ
- React, React Context, React Router
- Formik и браузерная валидация форм

#### Back-end
- Express
- MongoDB, Mongoose
- Cors, Express Rate Limit, Helmet
- Winston
- Celebrate
- Nginx, PM2

### Инструкции

#### `npm install` (в директориях frontend и backend)
Установить npm, используемые в проекте.

#### `npm start` (в директориях frontend и backend)
Запустить приложение в режиме разработки.

#### `npm run build` (в директории frontend)
Запустить оптимизированную сборку проекта для продакш версии.

#### `npm run dev` (в директории backend)
Запустить приложение в режиме разработки с хот-релоадом.

### Планы по доработке проекта

1. Реализовать закрытие модальных окон нажатием ESC, кликом по оверлею.
2. Реализовать адаптивную верстку страниц регистрации и аутентификации.
