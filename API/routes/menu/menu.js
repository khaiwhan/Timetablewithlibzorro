var express = require('express');
var router = express.Router();
var menus = require('../../models/menu/menu');

router.get('/:status',(req,res)=>{
    let data = req.params.status;
    console.log(data);
    
    menus.menus(data,(err,row)=>{
        if(err){
            res.json(err)
        }
        else{
            res.json(row)
        }
    })
})
module.exports = router;