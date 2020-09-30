const express = require('express');

const linkRouter = express.Router();


linkRouter.get('/',(req,res)=>{
    res.render('links')
});
linkRouter.post('/',(req,res)=>{
    //let newLink = JSON.stringify(req.body);
    
    res.render('links',req.body)
})


module.exports = linkRouter;