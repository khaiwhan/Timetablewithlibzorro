var connectdatabase = require('../../connectdatabase/connect');
var getdatauser = {
    getdatauser:(data,callback)=>{
        let cmd = `SELECT * FROM USERS`;
        return connectdatabase.query(cmd,callback);
    }
}
module.exports = getdatauser;