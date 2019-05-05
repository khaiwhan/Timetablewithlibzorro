var express = require('express');
var router = express.Router();
var section = require('../../models/section/section');

router.get('/:department_id',(req,res)=>{
    let data = req.params.department_id;
    section.section(data,(err,row)=>{
        if(err){
            res.json(err)
        }
        else{
            res.json(row)
        }
    })
})
module.exports = router;