import { createSlice } from "@reduxjs/toolkit";

let language = "english";

if(localStorage.getItem("language") !== null){
    if(localStorage.getItem("language") === "english"){
        language = "english";
    } else{
        language = "arabic";
    }
}

const chooselanguage = createSlice({
    initialState: language,
    name: "chooselanguage",
    reducers: {
        Chooselanguage: (state, action) => {
            return action.payload
        }
    }
})

export const {Chooselanguage} = chooselanguage.actions;
export default chooselanguage.reducer