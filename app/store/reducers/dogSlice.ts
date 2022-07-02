import { createSlice } from '@reduxjs/toolkit'
import { State } from 'react-native-gesture-handler'

export type DogData = {
    isLoading: boolean
    error: string
    dataDog: Root2[]
}

export interface Root2 {
    breedName: string
    image: string
    description: string
    dogInfo: DogInfo
    id: string
}

export interface DogInfo {
    height: string
    weight: string
    life: string
    breedGroup: string
}

const initialStateDogData: DogData = {
    isLoading: false,
    error: '',
    dataDog: [
        {
            breedName: '',
            image: '',
            description: '',
            dogInfo: {
                height: '',
                weight: '',
                life: '',
                breedGroup: ''
            },
            id: ''
        }
    ]
}

const dogSlice = createSlice({
    name: 'dog',
    initialState: initialStateDogData,
    reducers: {
        getDogRequest: (state) => {
            console.log('vaoooo');

            return {
                ...state, isLoading: true
            }
        },
        getDogSuccess: (state, action) => {
            return {
                ...state,
                isLoading: false,
                dataDog: action.payload
            }
        },
        getDogError: (state, action) => {
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        }
    }
})

const { reducer, actions } = dogSlice
const dogReducer = reducer
export const { getDogRequest, getDogSuccess, getDogError } = actions
export default dogReducer