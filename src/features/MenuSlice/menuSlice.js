import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:false,
    menuBottom:false
}
export const menuSlice=createSlice({
    name:"menuOpened",
    initialState,
    reducers:{
        openMenu:(state)=>{
            state.value=!state.value
        },
        openBottomMenu:(state)=>{
            state.menuBottom=!state.menuBottom
        }
    }
})

export const {openMenu,openBottomMenu}=menuSlice.actions;

export default menuSlice.reducer