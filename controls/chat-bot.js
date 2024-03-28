const messageBar = document.querySelector(".bar-wrapper input");
const sendBtn = document.querySelector(".bar-wrapper button");
const messageBox = document.querySelector(".message-box");

let API_URL = "https://api.openai.com/v1/chat/completions";
let API_KEY = "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";

sendBtn.addEventListener("click", function(){
    if (messageBar.value.length > 0){
        let message =
        `<div class="chat message">
            <img src="../assets/img/user.png" alt="">
            <span>
                ${messageBar.value}
            </span>
        </div>`

        let response =
        `<div class="chat response">
            <img src="../assets/img/robo.png" alt="user">
            <span>Loading...</span>
        </div>
        `

        messageBox.insertAdjacentHTML("beforeend", message);
        setTimeout(()=>{
            messageBox.insertAdjacentHTML("beforeend", response)
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${API_KEY}`
                },
                body: JSON.stringify({
                    "model": "gpt-3.5-turbo",
                    "messages": [{"role": "user","content": messageBar.value}]
                })
            }

            fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
                console.log(data);
            }).catch((error) => {
                console.log(error);
            })
        }, 1000);
    }
});
