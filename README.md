## Based on:

> [Node.js + MongoDB: User Authentication & Authorization with JWT](https://bezkoder.com/node-js-mongodb-auth-jwt/)

## Run locally

Create an `.env` file with:

|      Key      |       Description        |
| :-----------: | :----------------------: |
| DB_CONNECTION | Your database connection |
|    SECRET     |     Your JWT secret      |

```
Run:
 - npm install
 - node server.js
```

## Run with docker

Edit the `docker-compose.yml` file with:

|      Key      |       Description        |
| :-----------: | :----------------------: |
| DB_CONNECTION | Your database connection |
|    SECRET     |     Your JWT secret      |

```
Run:
 - docker-compose build nodejs
 - docker-compose up nodejs
```
