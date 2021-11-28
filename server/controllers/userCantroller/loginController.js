const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userDB = require('../../mongoDB/CRUD/usersDB');
const Validator = require('../../mongoDB/CRUD/Validator');
// import * as statusCodeDefinitions from "../../definitions/status-code-definition";
import * as statusCodeDef from "../../definitions/status-code-definition";
import * as messagesDef from"../../definitions/messages-definition";
import * as jwtConfig from "../../config/jwtConfig";

JWT_KEY = "dkfmsdlmlsmflsmflmslmflsmflmslfmsdlmfldsmf"

/**checked */

exports.login = async(req,res,next)=>{
    try{
        var user = await userDB.getUser(req.body.user);
        Validator.loginValidator(user);
        bcrypt.compare(req.body.password,user._doc.password,(err,result)=>{
            if(err){
                return res.status(statusCodeDef.UNAUTHORIZED_STATUS_CODE).json({
                    error:messagesDef.UNAUTHORIZED_MESSAGE
                });
            }
            if(result){
                const token = jwt.sign({
                    userName:user._doc.user,
                    role:user._doc.role,
                }, JWT_KEY,{
                    expiresIn: jwtConfig.JWT_TOKEN_EXPIRATION_TIME
                });
                return res.status(statusCodeDef.SUCCESS_STATUS_CODE).json({
                    message:messagesDef.LOGIN_SUCCESSFUL,
                    token:token
                });
            }
            console.log("UNAUTHORIZED_STATUS_CODE: ", statusCodeDef.UNAUTHORIZED_STATUS_CODE);
            return res.status(statusCodeDef.UNAUTHORIZED_STATUS_CODE).json({
                error: messagesDef.UNAUTHORIZED_MESSAGE
            });
        });
    }catch(err){
        return res.status(statusCodeDef.UNAUTHORIZED_STATUS_CODE).json({
            error: err
        });
    }  
};