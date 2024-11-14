const mongoose = require('mongoose')
const Users = new mongoose.Schema({
    AddresseIp:{
        type: String,
        require:true
        },
     })
const User = mongoose.model('CommentMod',Users)
module.exports= User