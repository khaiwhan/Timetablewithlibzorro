var connectdatabase = require('../../connectdatabase/connect');
var section = {
    section:(data,callback)=>{
        let department_id = data;
        let cmd = `SELECT FACULTY.FACULTY_NAME,DEPARTMENT.DEPARTMENT_NAME FROM FACULTY 
                    LEFT JOIN DEPARTMENT ON FACULTY.FACULTY_ID = DEPARTMENT.FACULTY_ID 
                    WHERE DEPARTMENT.DEPARTMENT_ID ='${department_id}'`;
        return connectdatabase.query(cmd,callback);
    }
}
module.exports = section;