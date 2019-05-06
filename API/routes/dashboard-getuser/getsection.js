var express = require('express');
var router = express.Router();
var dashboardGetSection = require('../../models/dashboard-getuser/getsection');

router.get('/:department',(req,res)=>{
    let data = req.params.department;
    dashboardGetSection.dashboardGetSection(data,(err,row)=>{
        if(err){
            res.json(err)
        }
        else{
            res.json(row)
        }
    })
})
module.exports = router;