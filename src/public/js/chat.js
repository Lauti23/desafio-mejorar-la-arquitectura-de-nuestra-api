const socket = io();
console.log("Chat Scripts")
//ELEMENTOS DEL DOM
let chatBox = document.getElementById("chatBox");
let chatLogs = document.getElementById("chatHistory");
let messageBox = document.getElementById("messageBox");
let username = document.getElementById("username").innerText

//FUNCIÓN PARA OBTENER EL MENSAGE QUE SE QUIERE ENVIAR
const submitChat = (e) => {
    e.preventDefault();
    let message = e.target[0].value;
    let user = username
    console.log(message)
    if( message !== "" && user ) {
        let date = new Date().toLocaleString()
        let chat = {user, date, message}
        console.log(chat)
        socket.emit("createMessage", chat)
        messageBox.value = "";
    }
}

chatBox.addEventListener("submit", (e) => submitChat(e));

socket.on("newMessage", data => {
    console.log(data)
    let chat = document.createElement("p");
    chat.innerHTML = `<span class="email">${data.user}</span><span class="date">[${data.date}]:</span><span class="message"> ${data.message}</span>`;
    chatLogs.append(chat);
})

socket.on("messagesData", data => {
    let messages = "";
    data.forEach(text => {
        messages += `<p class="chatMessageLine"><span class="email">${text.user}</span><span class= "date"> [${text.date}]</span><span class= "message">: ${text.message}</span></p>`
    })
    chatLogs.innerHTML = messages;
    messageBox.value = "";
}) 