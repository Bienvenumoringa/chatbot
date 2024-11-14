require('dotenv').config() 
const API_URL =process.env.API_URL
const API_KEY = process.env.API_KEY
try {
    const SendToChatGpt = async (req,res,next)=> {
        console.log('req. SendToChatGpt',(req.body))
        const data = req.body
        const UserMsg=data.UserMsg
       
            // Requette vers l'API de chat gpt
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${API_KEY}`
                },
                body: JSON.stringify({
                    "model": "gpt-3.5-turbo",
                    "messages": [{"role": "user","content": UserMsg}]
                })
            }
            console.log('API_URL :',API_URL);
            fetch(API_URL, requestOptions).then(res => res.json())
            .then(ChatGptRes => {
                console.log(ChatGptRes);
                res.json(ChatGptRes)
                // Poura etre adapté au format de reponse de chat gpt (j'ai pas de clé pour tester (:  )
            }).catch((error) => {
                console.log('ERREUR',error);
               res.json({Err:true})
            })
// 
            // Fonctionalités à venir ...
            // recuperation des addressesIp des utilisateurs

            // const Ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
            // const AddresseIp=Ip.includes('::ffff:')?
            // Ip.split('::ffff:')[1]:Ip
            // console.log('AddressIP :',AddresseIp)
           
            // 
    }  
    module.exports= SendToChatGpt
    } catch (e) {
    res.json({Err:true})
     console.log('erreur',e)
    } 
