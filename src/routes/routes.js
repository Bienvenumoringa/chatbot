const express = require("express")
const SendToChatGpt = require("../controllers/SendToChatGpt")
const router = new express.Router()

router.get('/',(req,res) => {
    res.render('chatbot',{layout:'chatBot-layout'})
})  
router.post('/SendToChatGpt',SendToChatGpt,(req,res,next) => {
    
}) 
module.exports= router