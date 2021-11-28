const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userDB = require('../../mongoDB/CRUD/usersDB');
const Validator = require('../../mongoDB/CRUD/Validator');
JWT_KEY = "dkfmsdlmlsmflsmflmslmflsmflmslfmsdlmfldsmf"

/**checked */

exports.login = async(req,res,next)=>{
    try{
        var user = await userDB.getUser(req.body.user);
        Validator.loginValidator(user);
        bcrypt.compare(req.body.password,user._doc.password,(err,result)=>{
            if(err){
                return res.status(401).json({
                    error: 'Auth failed'
                });
            }
            if(result){
                const token = jwt.sign({
                    userName:user._doc.user,
                    role:user._doc.role,
                }, JWT_KEY,{
                    expiresIn: "10h"
                });
                return res.status(200).json({
                    message:'Login successful',
                    token:token
                });
            }
            return res.status(401).json({
                error: 'Auth failed'
            });
        });
    }catch(err){
        return res.status(401).json({
            error: err
        });
    }  
};