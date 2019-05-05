var connectdatabase = require('../../connectdatabase/connect');
var department = {
    department:(data,callback)=>{
        let faculty_id = data;
        let cmd = `SELECT * FROM DEPARTMENT WHERE FACULTY_ID = '${faculty_id}'`;
        return connectdatabase.query(cmd,callback);
    }
}
module.exports = department;