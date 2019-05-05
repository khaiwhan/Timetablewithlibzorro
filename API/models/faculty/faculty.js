var connectdatabase = require('../../connectdatabase/connect');
var faculty = {
    faculty:(data,callback)=>{
        let cmd = `SELECT * FROM FACULTY`;
        return connectdatabase.query(cmd,callback);
    }
}
module.exports = faculty;