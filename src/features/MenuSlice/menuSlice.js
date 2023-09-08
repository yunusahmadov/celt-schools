import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:false
}
export const menuSlice=createSlice({
    name:"menuOpened",
    initialState,
    reducers:{
        openMenu:(state)=>{
            state.value=!state.value
        }
    }
})

export const {openMenu}=menuSlice.actions;

export default menuSlice.reducer