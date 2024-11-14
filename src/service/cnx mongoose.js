const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/Nobel'
async function connexionBD() { 
  mongoose.connect(url)
  .then(()=>{
    console.log('Une connexion a mongo DB a été établi avec succes!')
  })
  .catch (()=>{
    console.log('Une erreur est survenue lors de la connexion!')
  })
   }
      module.exports= {
        connexionBD
      }