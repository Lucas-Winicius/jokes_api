require("dotenv").config();
const express = require("express");
const routes = require("./src/routes/routes");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`Server started on: http://localhost:${process.env.PORT}/`);
});
