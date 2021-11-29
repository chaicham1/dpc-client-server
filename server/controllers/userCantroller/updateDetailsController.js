const userDB = require('../../mongoDB/CRUD/usersDB');
const user = require('../../models/user');
const bcrypt = require('bcrypt');


exports.updatePassword = async(req,res,next)=>{
    try{
        var myUser = await userDB.getUser(req.userData.userName);
        bcrypt.compare(req.body.oldPassword,myUser._doc.password,(err,result)=>{
            if(err){
                return res.status(UNAUTHORIZED_STATUS_CODE).json({
                    message: UPDATE_FAILED_MESSAGE
                });
            }
            if(result){
                return bcrypt.hash(req.body.newPassword,10,async(err,hash)=>{
                        await userDB.updateUserPassword(req.body.user,hash);
                        return res.status(SUCCESS_STATUS_CODE).json({
                            message: UPDATE_SUCCEEDED_MESSAGE,
                        });
                });
            }
            return res.status(UNAUTHORIZED_STATUS_CODE).json({
                message: UPDATE_FAILED_MESSAGE
            });
        }); 
    }catch(err){
        return res.status(UNAUTHORIZED_STATUS_CODE).json({
            message: UPDATE_FAILED_MESSAGE
        });
    }
    
};

//firstName, lastName, city, street, buildingNumber,apartmentNumber, phone
exports.updateUser = async(req,res,next)=>{
    var newDetails = new user.updateUser(req.body.firstName,req.body.lastName,req.body.city,
        req.body.street,req.body.buildingNumber,req.body.apartmentNumber,req.body.phone);
    return userDB.updateDetails(newDetails);
}