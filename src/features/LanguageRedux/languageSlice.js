import { createSlice } from "@reduxjs/toolkit";
import { az_lang,en_lang } from "../../language/language";

const initialState={
    value:az_lang,
}

export const languageSlice=createSlice({
    name:'language',
    initialState,
    reducers:{
        changeToEn:(state)=>{
            state.value=en_lang
        },
        changeToAz:(state)=>{
            state.value=az_lang
        },
    }
})

export const {changeToAz,changeToEn}=languageSlice.actions;

export default languageSlice.reducer