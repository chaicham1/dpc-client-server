const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectDetailsSchema = new Schema({
    
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
},{ timestamps: true });

const ProjectDetails = mongoose.model('ProjectDetails',projectDetailsSchema);

module.exports = ProjectDetails;