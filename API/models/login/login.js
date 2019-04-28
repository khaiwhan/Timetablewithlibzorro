var connectdatabase = require('../../connectdatabase/connect');
var login = {
    login:(data,callback)=>{
        let username = data.username;
        let password = data.password;
        let cmd = `SELECT * FROM USERS WHERE USERNAME = '${username}' AND PASSWORD = '${password}'`;
        return connectdatabase.query(cmd,callback);
    }
}
module.exports = login;