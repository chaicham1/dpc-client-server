const express = require("express");
const Router = express.Router();
const checkAuth = require("../../middleware/auth");

const authenticationController = require('../../controllers/userCantroller/AuthenticationController')

Router.get('/',checkAuth.authorization,authenticationController.auth);

module.exports = Router;