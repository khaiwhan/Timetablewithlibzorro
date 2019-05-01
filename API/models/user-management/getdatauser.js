var connectdatabase = require('../../connectdatabase/connect');
var getdatauser = {
    getdatauser:(callback)=>{
        let cmd = `SELECT * FROM USERS'`;
        return connectdatabase.query(cmd,callback);
    }
}
module.exports = getdatauser;