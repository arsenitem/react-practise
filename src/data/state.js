let store = {
    _state: {
        dialogs:[{id: "1", name: "Den"},{id: "2", name: "Sano"},{id: "3", name: "Egor"},{id: "4", name: "Mashs"}],

        messages:[{message: "Ola", datetime:"25.06.2020 18:36", position:"left"},
                {message: "Ola bro", datetime:"25.06.2020 18:36", position:"right"},
                {message: "Hows ya doings", datetime:"25.06.2020 18:36", position:"left"}],
        
        posts: [{message:"My first post",likes:"4", comments:"5"},
                {message:"My second post",likes:"2", comments:"3"},
                {message:"Developing...",likes:"11", comments:"7"} ],
        newPostText: "",
        newMessageText: "",
    },

    getState() {
        return this._state;
    },

    createNewPost() {
        let newPost = {message:this._state.newPostText,likes:"0", comments:"0"};
        this._state.posts.unshift(newPost); 
        this._state.newPostText = "";
        this.rerenderTree();
    },

    createNewMessage() {
        let newMessage = {message:this._state.newMessageText,datetime: new Date().toLocaleString(), position:"left"};
        this._state.messages.unshift(newMessage); 
        this._state.newMessageText = "";
        this.rerenderTree();
    },

    updateTextAreaMessage(newText) {
        this._state.newMessageText = newText;
        this.rerenderTree();
    },

    updateTextArea(newText) {
        this._state.newPostText = newText;
        this.rerenderTree();
    },

    renderTree() {
        console.log("state changed");
    },
    
    initRerender(renderFunc) {
        this.rerenderTree = renderFunc;
    }
}

export default store;