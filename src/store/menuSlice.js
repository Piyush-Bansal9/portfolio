import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    menuOpen: false
}

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        toggleMenu : (state) => {
            state.toggleState = !state.toggleState
        }
    }
})

export default menuSlice.reducer;
export const { toggleMenu } = menuSlice.actions;