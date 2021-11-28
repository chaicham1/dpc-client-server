const jwt = require('jsonwebtoken');
JWT_KEY = "dkfmsdlmlsmflsmflmslmflsmflmslfmsdlmfldsmf"


module.exports = {

    managerAuthorization: (req,res,next) => {
        try{
            if(req.userData.role !== 'manager'){
                throw Error("No permission");
            }
            next();
        }catch(error){
            return res.status(500).json({
                message: 'Auth failed'
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
            return res.status(401).json({
                message: 'Auth failed'
            });
        }
    },
}
 