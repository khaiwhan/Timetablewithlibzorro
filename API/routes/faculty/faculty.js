var express = require('express');
var router = express.Router();
var faculty = require('../../models/faculty/faculty');

router.get('/',(req,res)=>{
    let data = req.params;
    faculty.faculty(data,(err,row)=>{
        if(err){
            res.json(err)
        }
        else{
            res.json(row)
        }
    })
})
module.exports = router;