module.exports = {

    auth : async(req,res,next)=>{
        try{
            return res.status(SUCCESS_STATUS_CODE).json({
                role:req.userData.role,
                massage: AUTH_SUCCEEDED_MESSAGE,
            });
        }catch(err){
            return res.status(UNAUTHORIZED_STATUS_CODE).json({
                massage: OPERATION_FAILED_MESSAGE
            });
        }
    },
}