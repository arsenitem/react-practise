import {profileReducer} from './profileReducer';
import {dialogsReducer} from './dialogsReducer';

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

    dispatch(action) {
        this._state = profileReducer(this._state, action);
        this._state = dialogsReducer(this._state, action);
        this.renderTree();
    },

    renderTree() {
        console.log("state changed");
    },
    
    initRerender(renderFunc) {
        this.renderTree = renderFunc;
    }
}

export default store;