const express = require('express');

const webRoter = express.Router();

webRoter.use('/links',require('./linkRouter'))

webRoter.get('/',(req,res)=>{
    res.render('index')
})


module.exports = webRoter;
