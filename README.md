// README.md
# Travel expenses API

### Introduction
Travel expenses API is an open source platform that enable users take control over the expenses when doing a trip.

### Project Support Features
* Public (non-authenticated) users can access all trips and expenses view them, create new ones, edit and delete trips and expenses.

### Installation Guide
* Clone this repository [here](https://github.com/adlra20/rest-api.git).
* Run npm install to install all dependencies
* Run run dev and open the [app](http://localhost:3000) in your local to see the documentation of the API
* Install Prisma with 

```javascript
npm install -D prisma
```
* Now run this to setup Prisma:

```javascript
npx prisma init
```

* This will create a prisma folder, and inside it, a schema.prisma file:

```javascript
// This is your Prisma schema file,
// learn more about it in the docs: <https://pris.ly/d/prisma-schema>

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}
```

* This also created a .env file, After create your account in [Railway](https://railway.app/),
make sure to add the following line replacing the content for your URL (find it in the Connect tab once you have created the database).

```javascript
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public" 
```

* (Optional) I suggest to create some dummy data in order to check that everything works.

### Usage
* Connect to the API using Postman or Insomnia on port 3000.

### API Endpoints
More details in the [API](http://localhost:3000/)

| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| GET | /trips | List all the trips |
| POST | /trips | Create a new trip |
| GET | /trips/:id | Get the details of a trip, including expenses |
| PUT | /trips/:id | Edit a trip |
| DELETE | /trips/:id | Delete a trip |
| POST | /expenses | Create a new expense |
| GET | /expenses/:id | Get the details of an expense |
| PUT | /expenses/:id | Edit an expense |
| DELETE | /expenses/:id | Delete an expense |

### Technologies Used
* [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.
* [React](https://reactjs.org/) This is a popular JavaScript framework.
* [Next.js](https://nextjs.org/) A react framework for production.
* [Prisma](https://www.prisma.io/) ORM to build JavaScript and TypeScript apps in less time.
* [Railway](https://railway.app/) Made for any language, for projects big and small. Railway is the cloud that takes the complexity out of shipping software.

### Authors

 [Adlra20](https://github.com/adlra20)
 ![alt text](https://avatars.githubusercontent.com/u/69932838?v=4)

### License

This project is available for use under the MIT License.
