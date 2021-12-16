
const projectsDetailsMongoDB = require('../mongoDB/CRUD/ProjectDetailsCRUD');
const statusCodeDef = require('../definitions/status-code-definition');
const statusMessages = require('../definitions/messages-definition');

module.exports = {

    // getProjectInfo : async(req,res,next) => {
    //     try{
    //         var users = await projectsDetailsMongoDB.getProjects();
    //         return res.status(200).json({
    //             message: "Successfully worked",
    //             projects: projects
    //         });
    //     }catch(err){
    //         return res.status(500).json({
    //             message: "Failed"
    //         });
    //     }
    // },

    saveProjectInfo : async(req,res,next) => {
        try{
            await projectsDetailsMongoDB.saveProject(req.body.project);
            return res.status(statusCodeDef.SUCCESS_STATUS_CODE).json({
                message: statusMessages.SUCCESSFULLY_WORKED_MESSAGE,
            });
        }catch(err){
            return res.status(statusCodeDef.SERVER_ERROR_STATUS_CODE).json({
                message: statusMessages.OPERATION_FAILED_MESSAGE
            });
        }
    }
}