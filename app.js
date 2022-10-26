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
const personDetails = [
    {   idx: 0,
        name:"Abir Hasan",
        img: "images/img_1.jpg",
        active: "online",
    },
    {
        idx: 1,
        name:"Sakib Zaman",
        img: "images/img_2.jpg",
        active: "online",
    },
    {
        idx: 2,
        name:"Md Amanullah",
        img: "images/img_3.jpg",
        active: "online",
    },
    {
        idx: 3,
        name:"Ali Akbor",
        img: "images/img_4.jpg",
        active: "online",
    },
    {
        idx: 4,
        name:"Jayanto Sarkar",
        img: "images/img_5.jpg",
        active: "online",
    },
    {
        idx: 5,
        name:"Shanto",
        img: "images/img_6.jpg",
        active: "",
    },
    {
        idx: 6,
        name:"Mahfuzar Rahman",
        img: "images/img_7.jpg",
        active: "online",
    },
    {
        idx: 7,
        name:"Faysal Vai",
        img: "images/img_8.jpg",
        active: "online",
    },
    {
        idx: 8,
        name:"Tonmoy PK",
        img: "images/img_9.jpg",
        active: "online",
    },
    {
        idx: 9,
        name:"Shariful Islam",
        img: "images/img_10.jpg",
        active: "online",
    },
    {
        idx: 10,
        name:"Samir Adnan",
        img: "images/img_11.jpg",
        active: "online",
    },
]




const onClickUser = (idx) => {
    const userName = document.querySelector(".userName");
    const userImage = document.querySelector("#userImage");
    const active = document.querySelector(".active");
    const currentPerson = personDetails[idx];
    userName.textContent = currentPerson.name;
    userImage.src = currentPerson.img;
    active.textContent = currentPerson.active;


}






const renderList = () => {
    const contactList = document.querySelector("#chatlist");
    for(let i = 0; i< personDetails.length; i++){
        contactList.appendChild(renderContact(i));
    }
}


const renderContact = (idx) => {
    const person = personDetails[idx];
    const contactDiv = document.createElement("div");
    contactDiv.classList.add("block");
    contactDiv.appendChild(renderContactImage(person.img));
    contactDiv.appendChild(renderContactDetails(person.name));
    // contactDiv.appendChild(renderContactDetails(person.idx));
    contactDiv.addEventListener("click", ()=>{

        onClickUser(idx);
    });
    return contactDiv;
}

const renderContactImage = (imageLink) => {
    const img = document.createElement("img");
    img.src = imageLink;
    img.classList.add("cover");
    const image = document.createElement("div");
    image.classList.add("imgbx");
    image.appendChild(img);
    return image;
}

const renderContactDetails = (name) => {
    const details = document.createElement("div");
    details.classList.add("details");
    const listHead = document.createElement("div");
    listHead.classList.add("listhead");
    personName = document.createElement("h4");
    personName.textContent = name;
    showTime = document.createElement("p");
    showTime.textContent = "10.25";
    showTime.classList.add("time");
    listHead.appendChild(personName);
    listHead.appendChild(showTime);
    const msg = document.createElement("div");
    msg.classList.add("message_p");
    para2 = document.createElement("p");
    para2.textContent = "Hey, I would like to know about you. Please call me while you can.";
    msg.appendChild(para2);
    details.appendChild(listHead);
    details.appendChild(msg);


    return details;


}

renderList();

let getId = document.getElementById("chatlist");

renderList.removeChild(getId);
// const removeDiv = (id) => {
//
//     id.parentNode.removeChild("id");
// }
//
// removeDiv();