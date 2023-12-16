import { createSlice } from "@reduxjs/toolkit";

let showbulletsopt = true;

if(localStorage.getItem("show-bullets") !== null){
    if(localStorage.getItem("show-bullets") === "show"){
        showbulletsopt = true
    } else {
        showbulletsopt = false
    }
}

const bullets = createSlice({
    initialState: showbulletsopt,
    name: "bulits",
    reducers: {
        Bulletsoption: (state, action) => {
            return action.payload
        }
    }
})

export const {Bulletsoption} = bullets.actions;
export default bullets.reducer