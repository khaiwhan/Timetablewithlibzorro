var connectdatabase = require('../../connectdatabase/connect');
var menus = {
    menus:(data,callback)=>{
        let status = data;
        let cmd = `SELECT * FROM MENUS WHERE SECTION = '${status}'`;
        return connectdatabase.query(cmd,callback);
    }
}
module.exports = menus;