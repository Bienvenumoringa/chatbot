
const crypto = window.crypto;
const urlServer = 'http://localhost:3000'
const messageBar = document.querySelector(".bar-wrapper input");
const sendBtn = document.querySelector(".bar-wrapper button");
const messageBox = document.querySelector(".message-box");
let BotmsgId='BotResponse'
// identifiant provisoire des reponses du Bot
sendBtn.addEventListener("click", function(){
    if (messageBar.value.length > 0){
        let message =
        `<div class="chat message rounded">
            <img src="/img/user.png" alt="">
            <span>
                ${messageBar.value}
            </span>
        </div>`

        let response =
        `<div id=${BotmsgId} class="chat response rounded">
            <img src="/img/robo.png" alt="user">
            <span>Writting...</span>
        </div>
        `
        // message de l'utilisateur
        messageBox.insertAdjacentHTML("beforeend", message);
        // message de l'assistant
        messageBox.insertAdjacentHTML("beforeend", response)
            // here   
        const token=localStorage.getItem('Token')
                    const SendDatas={
                        UserMsg:messageBar.value
                    }
                     axios.post(`${urlServer}/SendToChatGpt`,SendDatas)
                     .then(data=>{
                        const res= data.data
                        console.log('data,',res)
                        if( !res.BotMsg){
                            return (()=>{ 
                                const Onload= document.getElementById(BotmsgId)
                                Onload.innerHTML =
                                        `<img src="/img/robo.png" alt="user">
                                        <span> Je suis désolé, je n'arrive pas à joindre mes serveurs</span>`
                                Onload.removeAttribute('id')
                            })()
                        }
                            const Onload= document.getElementById(BotmsgId)
                            Onload.innerHTML =
                                            `
                                                <img src="/img/robo.png" alt="user">
                                                <span>${res.BotMsg}</span>
                                            `
                            Onload.removeAttribute('id')
                    })
                .catch(e=>{
                    console.log(e)
                })
    }
});
