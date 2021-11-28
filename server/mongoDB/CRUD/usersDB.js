const crypto = require('crypto');
const UserDetails = require("../Schemas/userDetailsSchema");
// const Validator = require("../mySql/Validator");

function genHash(s){
    hash = crypto.getHashes();
    hashPwd = crypto.createHash('sha1').update(`${s}thereissometime`).digest('hex'); 
    return hashPwd;
}

module.exports = {
    
    /** User update his password */
    updateUserPassword: async(userName,password) =>{
        const filter = { userName: userName };
        const update = { password: password };
        let doc = await UserDetails.findOneAndUpdate(filter, update);
    },

    /** User update his details */
    updateDetails: (details)=>{
        console.log("ss");
    },

    /** return user record by username */
    getUser: async (userName) =>{
        try{
           return await UserDetails.findOne({ user:userName });
        } catch(error){
            throw new Error("Something goes wrong, Please try again later");
        }
    },

    /** insert new user */
    insertUser: async (user) => {
        const userToSave = new UserDetails(user);
        try{
            await userToSave.save();
        } catch(error){
            throw new Error("Something goes wrong, Please try again later");
        }
    }
}