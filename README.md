# ExpressAPI

Project for Development Platforms-course (4th semester). Introduction to backend-development.

## Description

A REST API built with Express for a MySQL-backed blog application. Users can register, log in, read all articles and post their own.
The following endpoints are supported in the API:

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/auth/register` | Register a new user (`email`, `password`) |
| POST | `/auth/login` | Log in with existing user and receive a JWT |
| GET | `/articles` | View all articles (public access) |
| POST | `/articles` | Post new article (protected, requires JWT) |

## Technologies and features

**Stack**
- Node.js
- Express (with Express Router)
- TypeScript
- MySQL

**Authentication and security**
- Password hashing with bcrypt
- JWT-authentication
- CORS

**Validation and error handling**
- Request validation with Zod and validation middleware
- Error handling

**Tooling**
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

2. Install the dependencies:

```bash
npm install
```

3. Create a MySQL database with `users` and `articles` tables:

```sql
   CREATE DATABASE blog;
   USE blog;
   CREATE TABLE users (
     id INT PRIMARY KEY AUTO_INCREMENT,
     email VARCHAR(255) NOT NULL UNIQUE KEY,
     password_hash VARCHAR(255) NOT NULL,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   CREATE TABLE articles (
     id INT PRIMARY KEY AUTO_INCREMENT,
     title VARCHAR(200) NOT NULL,
     body TEXT,
     category VARCHAR(200),
     submitted_by INT NOT NULL,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
     FOREIGN KEY (submitted_by) REFERENCES users(id)
   );
```

4. Create an `.env` and fill in your own values (see Environment Variables).

### Environment variables

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
