var express = require('express');
var router = express.Router();
var department = require('../../models/department/department');

router.get('/:faculty_id',(req,res)=>{
    let data = req.params.faculty_id;
    department.department(data,(err,row)=>{
        if(err){
            res.json(err)
        }
        else{
            res.json(row)
        }
    })
})
module.exports = router;