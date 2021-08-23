const express = require('express');
const router = require('./routes');
require('dotenv');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// handle CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});


app.use('/api', router);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
})