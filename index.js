const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const routes = require("./src/router");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SIGNATURE));
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`Server started on: http://localhost:${process.env.PORT}/`);
});
