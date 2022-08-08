import { createSlice } from "@reduxjs/toolkit";

 export interface EditorStateInterface {
    clickedPlay: {
        item: {},
        isOpen: boolean;
    }
}

const initialState: EditorStateInterface = {
    clickedPlay: {
        item: {},
        isOpen: false,
    }
}

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setClickedPlay: (state, action) => {
            state.clickedPlay.item = action.payload
        },
        clearClickedPlay: (state) => {
            state.clickedPlay.item = {}
        },
        setClickedPlayOpen: (state) => {
            state.clickedPlay.isOpen = true
        },
        setClickedPlayClose: (state) => {
            state.clickedPlay.isOpen = false
        }
    }

});

export const {
    setClickedPlay,
    clearClickedPlay,
    setClickedPlayOpen,
    setClickedPlayClose
} = globalSlice.actions;

export default globalSlice.reducer;