const express = require("express");
const userMethods = require("./controller/user");
const jwtMiddleware = require("./middleware/jwt");

const routes = express.Router();

// USER METHODS
routes.post("/user", userMethods.create);
routes.get("/user", jwtMiddleware, userMethods.view);

module.exports = routes;
