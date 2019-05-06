var connectdatabase = require('../../connectdatabase/connect');
var dashboardGetSection = {
    dashboardGetSection:(data,callback)=>{
        let department = data;
        let cmd = `SELECT * FROM DEPARTMENT LEFT JOIN FACULTY ON FACULTY.FACULTY_ID = DEPARTMENT.FACULTY_ID WHERE DEPARTMENT_NAME = '${department}'`;
        return connectdatabase.query(cmd,callback);
    }
}
module.exports = dashboardGetSection;