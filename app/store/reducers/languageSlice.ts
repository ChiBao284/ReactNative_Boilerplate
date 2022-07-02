import { createSlice } from '@reduxjs/toolkit'

const initialStateLanguage = {
    language: 'vi'
}

export const languageSlice = createSlice({
    name: "language",
    initialState: initialStateLanguage,
    reducers: {
        changeLanguage: (state, action) => {
            return { ...state, language: action.payload }
        }
    }
})

export const { reducer, actions } = languageSlice
export const { changeLanguage } = actions
const languageReducer = reducer
export default languageReducer