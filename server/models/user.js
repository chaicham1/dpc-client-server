
module.exports = {
    user : class User {

        constructor(user,password,firstName,lastName,role){
                this.user = user;
                this.password = password;
                this.firstName = firstName;
                this.lastName = lastName;
                this.role = role;
        }
    },
    updateUser : class updateUser {

        constructor(firstName,lastName){
                this.firstName = firstName;
                this.lastName = lastName;
        }
    },

    userDetails : class userDetails{
        constructor(user,firstName,lastName,role){
            this.user = user;
            this.firstName = firstName;
            this.lastName = lastName;
            this.role = role;
    }
    }
}