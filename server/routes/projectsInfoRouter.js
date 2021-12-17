const express = require("express");
const Router = express.Router();
const checkAuth = require("../middleware/auth");
// const checkAuth = require("../../middleware/auth");

const projectInfoController = require('../controllers/projectInfoController')

Router.post('/save',checkAuth.authorization,projectInfoController.saveProjectInfo);
Router.put('/update',checkAuth.authorization,projectInfoController.updateProjectInfo);
Router.get('/getProject/:filterkey/:filterval',projectInfoController.getProjectByFilterInfo);
Router.get('/getAllProjects',projectInfoController.getAllProjectsInfo);

module.exports = Router;