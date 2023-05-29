const express = require("express");
const userMethods = require("./controller/user");
const sessionMethods = require("./controller/session");
const jwtMiddleware = require("./middleware/jwt");

const routes = express.Router();

// USER METHODS
routes.post("/user", userMethods.create);
routes.get("/user", jwtMiddleware, userMethods.view);
routes.patch("/user", jwtMiddleware, userMethods.update);
routes.delete("/user", jwtMiddleware, userMethods.deleteUser);

// SESSION METHODS
routes.post("/session", sessionMethods.login);
routes.delete("/session", sessionMethods.logout);

module.exports = routes;
