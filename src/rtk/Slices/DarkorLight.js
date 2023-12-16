import { createSlice } from "@reduxjs/toolkit";

let optdarkmode = false

if(localStorage.getItem("dark-mode") !== null){
    if(localStorage.getItem("dark-mode") === "true"){
        optdarkmode = true
    } else{
        optdarkmode = false
    }
}

const darkorlight = createSlice({
    initialState: optdarkmode,
    name: "darkorlight",
    reducers: {
        Darkorlight: (state, action) => {
            return action.payload
        }
    }
})

export const {Darkorlight} = darkorlight.actions;
export default darkorlight.reducer