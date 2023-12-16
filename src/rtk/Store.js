import { configureStore } from "@reduxjs/toolkit";
import Options from "./Slices/Options";
import Bulletsopt from "./Slices/Bulletsopt";
import DarkorLight from "./Slices/DarkorLight";
import Langauage from "./Slices/Langauage";

export const Store =  configureStore({
    reducer: {
        Options: Options,
        Bullets: Bulletsopt,
        Dark: DarkorLight,
        Chooselanguage: Langauage
    }
})