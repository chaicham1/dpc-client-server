const userDB = require('../../mongoDB/CRUD/usersDB');
const usersModel = require('../../models/user');

exports.getUser = async(req,res,next)=>{
    
    try{
        var myUser = (await userDB.getUser(req.userData.userName))._doc;
        return res.status(SUCCESS_STATUS_CODE).json({
            message: SUCCESSFULLY_WORKED_MESSAGE,
            myUser: new usersModel.userDetails(
                myUser.user,
                myUser.firstName,
                myUser.lastName,
                myUser.role,
            )
        });
    }catch(err){
        return res.status(SERVER_ERROR_STATUS_CODE).json({
            message: OPERATION_FAILED_MESSAGE
        });
    }
}
