const ProjectDetails = require('../Schemas/projectDetailsSchema');

module.exports = {

    getProjectByFilter: async(filter) => {       
        try{
            return await ProjectDetails.find(filter).exec();
        } catch(error){
            throw new Error(error);
        }
    },

    getAllProjects: async() => {       
        try{
            return await ProjectDetails.find().exec();
        } catch(error){
            throw new Error(error);
        }
    },

    saveProject: async(projectDetailsObj) => {       
        try{
            const project = new ProjectDetails(projectDetailsObj);
            await project.save()
        } catch(error){
            throw new Error(error);
        }
    },

    updateProject: async(projectDetailsObj) => {       
        try{
            const filter = { name: projectDetailsObj.name};
            const project = await ProjectDetails.findOneAndUpdate(filter,projectDetailsObj,{
                new:true
            });
        } catch(error){
            throw new Error(error);
        }
    }
}