const chatBody = document.querySelector(".chatBox");
const textInput = document.querySelector("#txtInput");
const sendMessage = document.querySelector(".send");

sendMessage.addEventListener("click", ()=>{
    renderUserMessage();
});

textInput.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        renderUserMessage();
    }
});


const renderUserMessage = () => {
    const userInput = textInput.value;
    renderMessageElement(userInput, "user");
    textInput.value = "";
    setTimeout(()=>{
        renderChatbotResponse(userInput);
        setScroller();
    },600)


}

const renderChatbotResponse = (userInput) => {
    const response = getChatbotResponse(userInput);
    renderMessageElement(response);
}


const renderMessageElement = (txt, type) => {
    let className = "my_message";
    if(type !== "user"){
        className = "friend_msg";
    }

    const messageElement = document.createElement("div");
    const messageParagraph = document.createElement("p");
    const txtNode = document.createTextNode(txt);
    messageElement.classList.add(("message"));
    messageElement.classList.add((className));
    messageParagraph.append(txtNode);
    messageElement.append(messageParagraph);
    chatBody.append(messageElement);

}


const getChatbotResponse = (userInput) => {
    return responseObj[userInput] == undefined ? "Please try something else.": responseObj[userInput];

}


const setScroller = () => {
    if(chatBody.scrollHeight > 0){
        chatBody.scrollTop = chatBody.scrollHeight;
    }
};