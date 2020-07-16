import render from './render';

let dialogData = [{id: "1", name: "Den"},{id: "2", name: "Sano"},{id: "3", name: "Egor"},{id: "4", name: "Mashs"}];

let messageData = [{message: "Ola", datetime:"25.06.2020 18:36", position:"left"},
                  {message: "Ola bro", datetime:"25.06.2020 18:36", position:"right"},
                  {message: "Hows ya doings", datetime:"25.06.2020 18:36", position:"left"}
                  ];

let postData = [{message:"My first post",likes:"4", comments:"5"},
                  {message:"My second post",likes:"2", comments:"3"},
                  {message:"Developing...",likes:"11", comments:"7"}
                ];
let state = {
    dialogs: dialogData,
    messages: messageData,
    posts: postData,
    newPostText: "",
}

let rerenderTree = function() {
    console.log("state changed");
}
export let initRerender = function(renderFunc) {
    rerenderTree = renderFunc;
}

export let createNewPost = function(){
    let newPost = {message:state.newPostText,likes:"0", comments:"0"};
    state.posts.unshift(newPost); 
    state.newPostText = "";
    rerenderTree();
}
export let updateTextArea = function (newText) {
    state.newPostText = newText;
    rerenderTree();
}
export default state;