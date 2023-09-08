import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "../features/LanguageRedux/languageSlice"
import menuReducer from "../features/MenuSlice/menuSlice"


export const store=configureStore({
    reducer:{
        language:languageReducer,
        menuOpened:menuReducer,
    }
})