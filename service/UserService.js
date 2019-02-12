let UserDao = require('../dao/UserDao')


module.exports = {
    getUserDetail : function getUserDetail(id, cal){
        UserDao.findUserById(id, (result)=>{
            console.log("This is Service" + result)
            cal(result)
        })
    }
}