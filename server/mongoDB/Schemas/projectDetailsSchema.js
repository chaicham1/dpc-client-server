const mongoose = require('mongoose');
const uuid = require('uuid');
const Schema = mongoose.Schema;

const files = new Schema({ 
    name : {
        type: String,
    },
    downloadUrl : {
        type: String,
    },
},{ timestamps: true });

const links = new Schema({ 
    title : {
        type: String,
    },
    url : {
        type: String,
    },
},{ timestamps: true });

const teamMembers = new Schema({ 
    name : {
        type: String,
        required: true
    }
},{ timestamps: true });

const technologies = new Schema({ 
    title : {
        type: String,
        required: true
    },
    imgUrl : {
        type: String,
        required: true
    },
});

const admins = new Schema({ 
    username: {
        type: String,
        required: true
    },
},{ timestamps: true });

const amdocsProductsSchema = new Schema({
    imgUrl: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },

},{ timestamps: true });

const projectDetailsSchema = new Schema({
    
    name: {
        type: String,
        required: true,
        unique : true
    },
    imgUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    amdocsProducts: [amdocsProductsSchema],
    admins : [admins],
    technologies: [technologies],
    teamMembers: [teamMembers],
    links: [links],
    files: [files],

},{ timestamps: true });

const ProjectDetails = mongoose.model('ProjectDetails',projectDetailsSchema);

module.exports = ProjectDetails;