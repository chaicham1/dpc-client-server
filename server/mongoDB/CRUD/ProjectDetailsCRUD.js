const ProjectDetails = require('../Schemas/projectDetailsSchema');

module.exports = {

    saveProject: async(projectDetailsObj) => {       
        try{
            const project = new ProjectDetails(projectDetailsObj);
            await project.save()
        } catch(error){
            throw new Error("Something goes wrong, Please try again later");
        }
        
    }
}