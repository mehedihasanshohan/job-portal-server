// dotenv config
require('dotenv').config();

// import packages
const express = require('express');
const cors = require('cors');
// port from .env
const port = process.env.PORT || 5000;

// express app
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// test route
app.get('/', (req, res) => {
  res.send('Hello from the server!');
});



// start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
