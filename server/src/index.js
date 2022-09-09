require("dotenv").config();
const express = require("express");
const cors = require("cors");
const route = require('./routes')
const morgan = require('morgan');
var bodyParser = require('body-parser');
const connectDB = require("./config/mongoDb/connectDb");
const formData = require('express-form-data');

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;
// for parsing application/json
app.use(bodyParser.json()); 
app.use(formData.parse());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded
;
// Connect mongodb
connectDB();

app.use(morgan('combined'));
app.use(
  express.urlencoded({
      extended: true,
  }),
);
route(app);


app.listen(PORT, () => console.log(`App listen on port: ${PORT}`));
