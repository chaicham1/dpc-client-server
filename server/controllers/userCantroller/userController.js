const userDB = require('../../mongoDB/CRUD/usersDB');
const usersModel = require('../../models/user');

exports.getUser = async(req,res,next)=>{
    
    try{
        var myUser = (await userDB.getUser(req.userData.userName))._doc;
        return res.status(200).json({
            message: "Successfully worked",
            myUser: new usersModel.userDetails(
                myUser.user,
                myUser.firstName,
                myUser.lastName,
                myUser.role,
            )
        });
    }catch(err){
        return res.status(500).json({
            message: "Failed"
        });
    }
}
