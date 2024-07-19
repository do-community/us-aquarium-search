// import express and dotenv node modules
const express = require('express');
const dotenv = require('dotenv');

// create the server with express and name it app
const app = express();

// use port 8080 as default port
const PORT = process.env.PORT || 8080;

// enable body parser to accept json data
app.use(express.json());

// state which port the server is listening to and log it to the console
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
