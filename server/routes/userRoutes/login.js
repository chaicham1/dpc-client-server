const express = require("express");
const Router = express.Router();

const loginController = require('../../controllers/userCantroller/loginController')

Router.post('/',loginController.login);

module.exports = Router;