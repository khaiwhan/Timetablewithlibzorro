var express = require('express');
var router = express.Router();
var getdatauser = require('../../models/user-management/getdatauser');

router.get('/',(req,res)=>{
    let data = req.params
    getdatauser.getdatauser(data,(err,row)=>{
        if(err){
            res.json(err)
        }
        else{
            res.json(row)
        }
    })
})
module.exports = router;