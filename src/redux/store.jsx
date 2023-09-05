import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "../features/LanguageRedux/languageSlice"

export const store=configureStore({
    reducer:{
        language:languageReducer,
    }
})