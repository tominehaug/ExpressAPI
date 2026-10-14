# ExpressAPI

Project for course in development platforms.

## Description

For this project I created a MySQL database and this REST API with Express to use with it. The database supports a blog application, where users can view other users' articles as well as register and post their own articles. The following endpoints are supported in the API:

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/auth/register` | Register a new user (`email`, `password`) |
| POST | `/auth/login` | [Log in with existing user and receive a JWT] |
| GET | `/articles` | View all articles (public access) |
| POST | `/articles` | Post new article (protected, requires JWT) |

## Technologies and features

- TypeScript
- MySQL
- Express Router
- Bcrypt (password hashing)
- Json Web Token
- Cors
- Zod
- Validation Middleware
- Error handling
- ESLint
- Prettier

## Prerequisites

- [Node.js](https://nodejs.org/)
- [MySQL](https://dev.mysql.com/downloads/)

## Getting Started

### Installing

1. Clone the repo:

```bash
git clone https://github.com/tominehaug/ExpressAPI.git
cd ExpressAPI
```
Run this command in the terminal.

2. Install the dependencies:

```bash
npm install
```

3. Create a MySQL database with `users` and `articles` tables:

```sql
   CREATE DATABASE blog;
   USE blog;
   CREATE TABLE users (
   );
   CREATE TABLE articles (
   );
```

4. Copy `.env.example` to `.env` and fill in your own values (see below).

## Environment variables

| Variable | Description | Example |
| --- | --- | --- |
| `DB_HOST` | MySQL host | `localhost` |
| `DB_USER` | MySQL user | `root` |
| `DB_PASSWORD` | MySQL password | `your_password` |
| `DB_NAME` | Database name | `blog` |
| `JWT_SECRET` | Secret used to sign tokens | `a-long-random-string` |
| `PORT` | Port the server listens on | `3000` |

### Running

To run the app run the commands below in the terminal.

Development:

```bash
npm run dev
```

Production:

```bash
npm run build
npm start
```

## Author
Tomine Rønningen Haug - @tominehaug
