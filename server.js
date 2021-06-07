const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection')
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync().then(() => {

  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
})
// Connects to the SQL database before starting the server

// Add database ecommerce_db, and details to env file - Done
// connect to db with sequelise - Done
// enter objects into models to create tables - Models - DONE
// when I enter schema and seed commands then development database is created and is seeded - DONE
// server is synced to Sequelize and SQL database - Done
// Set up files (tags) in Insomnia.  
// Open up GET routes in Insomnia Core for:
//  -- categories
//  -- products
//  -- tags
// ** Display All These Get Requests in JSON **
// Test API in insomina:
// -- POST
// -- PUT
//  -- DELETE
// Create, update and delete data in the ecomerce_db

// Product and Tag Routes, Category


