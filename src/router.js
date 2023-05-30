const express = require("express");
const userMethods = require("./controller/user");
const sessionMethods = require("./controller/session");
const postMethods = require("./controller/post");
const homeMethods = require("./controller/home");
const jwtMiddleware = require("./middleware/jwt");
const checkOwner = require("./middleware/checkOwner");

const routes = express.Router();

// HOME METHODS
routes.get("/", homeMethods);

// USER METHODS
routes.post("/user", userMethods.create);
routes.get("/user", jwtMiddleware, userMethods.view);
routes.patch("/user", jwtMiddleware, userMethods.update);
routes.delete("/user", jwtMiddleware, userMethods.deleteUser);

// SESSION METHODS
routes.post("/session", sessionMethods.login);
routes.delete("/session", sessionMethods.logout);

// POST METHODS
routes.post("/post", jwtMiddleware, postMethods.create);
routes.get("/post/:id", jwtMiddleware, postMethods.view);
routes.patch("/post/:id", jwtMiddleware, checkOwner, postMethods.update);
routes.delete("/post/:id", jwtMiddleware, checkOwner, postMethods.delete);

module.exports = routes;
