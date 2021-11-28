const jwt = require('jsonwebtoken');
JWT_KEY = "dkfmsdlmlsmflsmflmslmflsmflmslfmsdlmfldsmf"


module.exports = {

    managerAuthorization: (req,res,next) => {
        try{
            if(req.userData.role !== 'manager'){
                throw Error(NO_PERMISSION_MESSAGE);
            }
            next();
        }catch(error){
            return res.status(SERVER_ERROR_STATUS_CODE).json({
                message: UNAUTHORIZED_MESSAGE
            });
        }
    },

    authorization: (req,res,next) => {
        try{
            const token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token,JWT_KEY);
            req.userData = decoded;
            next();
        }catch(error){
            return res.status(UNAUTHORIZED_STATUS_CODE).json({
                message: UNAUTHORIZED_MESSAGE
            });
        }
    },
}
 