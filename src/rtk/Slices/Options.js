import { createSlice } from "@reduxjs/toolkit";

let choicerbackground = true

if(localStorage.getItem("background") !== null){
    choicerbackground = localStorage.getItem("background");
}

const options = createSlice({
    initialState: choicerbackground,
    name: "options",
    reducers: {
        randomizebackground: (state, action) => {
            return action.payload
        },
        background: (state, action) => {
            return action.payload  
        }
    }
})

export const { randomizebackground , background} = options.actions;
export default options.reducer