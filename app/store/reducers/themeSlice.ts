import { IThemeState } from "@models/reducers/theme";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IThemeState = {
    isDark: false,
};

const themeSlice = createSlice({
    name: "theme",
    initialState: initialState,
    reducers: {
        toggleTheme: (state, action) => {
            state.isDark = action.payload
        }
    }
})

const { reducer, actions } = themeSlice
const themeReducer = reducer
export const { toggleTheme } = actions
export default themeReducer