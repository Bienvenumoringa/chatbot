
const bodyParser = require('body-parser');
const express = require("express")  
const {connexionBD}= require("./src/service/cnx mongoose.js")  
const userRoutes = require("./src/routes/routes.js")  
const { create } =require('express-handlebars');  
require('dotenv').config()  
const app = express()  
const port = process.env.port   
connexionBD()  
app.use(bodyParser.json())
app.use(userRoutes)  
app.use(express.json())  
app.set('view engine','handlebars')  
app.set('views','./views')  
// 
const hbs = create({
    helpers: {
        Contribuer() { return ''; },
        urlSite() { return 'https://LienVersNotreSite'; },
        urlContact() { return 'https://LienVersNotreWhatsApp'; },
        BotDefaultMsg() { return "Bonjour, c'est morcas assistant, en quoi puis-je vous aider aujourd'hui ?"; },

    }
});

app.engine('handlebars', hbs.engine);
// 
app.use(express.static('public'))  
app.use((req,res,next) => {  
    res.header('Access-Control-Allow')  
    next()  
})  
app.listen(port,()=>{  
    console.log(`l application ecoute au port ${port}`)  
})