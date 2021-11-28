const express = require("express");
const Router = express.Router();
const checkAuth = require("../middleware/auth");
// const checkAuth = require("../../middleware/auth");

const projectInfoController = require('../controllers/projectInfoController')

Router.post('/save',checkAuth.authorization,projectInfoController.saveProjectInfo);
// Router.get('/getProjectsInfo',projectInfoController.getProjectInfo);
// Router.get('/getProjectsInfo',checkAuth.authorization,appointmentsController.getAppointmentDetails);

module.exports = Router;