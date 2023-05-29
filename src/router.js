const express = require("express");
const userMethods = require("./controller/user");

const routes = express.Router();

// USER METHODS
routes.post("/user", userMethods.create);

module.exports = routes;
