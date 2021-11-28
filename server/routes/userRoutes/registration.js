const express = require("express");
const Router = express.Router();
const registerController = require('../../controllers/userCantroller/registerController')

Router.post("/",registerController.register);

module.exports = Router;