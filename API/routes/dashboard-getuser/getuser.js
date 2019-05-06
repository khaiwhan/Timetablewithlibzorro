var express = require('express');
var router = express.Router();
var dashboardGetUser = require('../../models/dashboard-getuser/getuser');

router.get('/:firstname',(req,res)=>{
    let data = req.params.firstname;
    dashboardGetUser.dashboardGetUser(data,(err,row)=>{
        if(err){
            res.json(err)
        }
        else{
            res.json(row)
        }
    })
})
module.exports = router;