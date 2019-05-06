var connectdatabase = require('../../connectdatabase/connect');
var dashboardGetUser = {
    dashboardGetUser:(data,callback)=>{
        let firstname = data;
        let cmd = `SELECT * FROM USERS WHERE FIRSTNAME = '${firstname}'`;
        return connectdatabase.query(cmd,callback);
    }
}
module.exports = dashboardGetUser;