const ProjectDetails = require('../Schemas/projectDetailsSchema');

module.exports = {

    saveProject: async(projectDetailsObj) => {

        const project = new ProjectDetails(projectDetailsObj);
        project.save().then((result) =>{
            return result;
        }).catch((err) =>{
            console.log(err);
        });
    }
}