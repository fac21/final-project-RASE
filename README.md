## README.md

---

## Project description

### UK Travel Guide

The UK Travel Guide is a web app that allows users to search and contribute itineraries for UK-based trips, in order to make UK travel more accessible.

Upon entering the app, users are able to look through itineraries which have been added by others, using filters to customise their search. In order to save their 'favourites' or add itineraries of their own to the database, they need to sign up and create a profile. Once signed in, users have full access to the app.

Authentication for this is provided by XXXX.

This web app is hosted on Vercel and the database is hosted on XXXX.

This project has been designed and created as part of [Founders and Coders](https://www.foundersandcoders.com/) Spring Bootcamp 2021 by four developers. The creative process included Figma design, user research and user testing before the final product was created.

---

## Design

### Itineraries

| Homepage                                                     | Itinerary Example                                            | Search Itineraries                                           |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| <img src = "https://i.imgur.com/kUtPuMO.png" height="250px"> | <img src = "https://i.imgur.com/xeIoFlZ.png" height="250px"> | <img src = "https://i.imgur.com/WqC7nTQ.png" height="250px"> |

### Authentication

| Log in                                                       | Sign up                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| <img src = "https://i.imgur.com/S04g425.png" height="300px"> | <img src = "https://i.imgur.com/K42OyuJ.png" height="300px"> |

---

## Tech Stack

<img src="https://i.imgur.com/fTbBWKd.png" width="50px">
<img src="https://i.imgur.com/zVr4l4N.png" width="50px">
<img src="https://i.imgur.com/Bg1Gkhw.png" width="60px">
<img src="https://i.imgur.com/ftqh6Vm.png" width="50px">
<img src="https://i.imgur.com/11NVNjn.png" width="50px">

---

### Steps to run it localy

1. Create a .env file in the root folder
2. Inside the .env file create These variables:

> DATABASE_URL ="your psql database url"

3. Connect with your database and then initialize the init.sql file to populate your database with new tables and data. **From the root folder**

```bash=
chmod +x ./scripts/db:setup
chmod +x ./scripts/db:build
npm run db:setup
npm run db:build
```

4. Now start your dev server with:

```bash=
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
