var express = require('express');
var router = express.Router();
var login = require('../../models/login/login');

router.post('/',(req,res)=>{
    let data = req.body; 
    login.login(data,(err,row)=>{
        if(err){
            res.json(err)
        }
        else if(row.length <= 0){
            res.json(404,'error')
        }
        else{
            res.json(row[0])
        }
    })
})
module.exports = router;