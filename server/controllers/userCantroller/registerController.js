// const User = require('../../models/user');
const bcrypt = require('bcrypt');
const userDB = require('../../mongoDB/CRUD/usersDB');
const Validator = require("../../mongoDB/CRUD/Validator");
const { use } = require('../../routes/userRoutes/registration');
const userModel = require('../../models/user');

/**checked */

async function insertNewUser(tmpBody,hash){
    try{
        const user = new userModel.user(
            tmpBody.user,
            hash,
            tmpBody.firstName,
            tmpBody.lastName,
            tmpBody.role,
        );
        return await userDB.insertUser(user);
    }catch(err){
        throw new Error(err);
    }
   
}

exports.register = async(req,res,next)=>{
    try{
        tmpBody = req.body;
        await Validator.registrationValidator(tmpBody);
        bcrypt.hash(tmpBody.password,10,async(err,hash)=>{
            try{
                if(tmpBody.role === 'manager' || tmpBody.role === 'participant')
                res.status(200).send(await insertNewUser(tmpBody,hash));
                else throw new Error("Not a legal user role");
            }catch(err){
                return res.status(500).json({
                    error: err.message    
                });
            }
        });
    }catch(err){
        return res.status(500).json({
            error: err.message    
        });
    }
};