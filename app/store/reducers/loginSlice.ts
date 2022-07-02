import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILoginState } from 'app/models/reducers/login';
import {
    ILoginRequestState,
    ILoginResponseState,
} from 'app/models/actions/login';
const initialStateLogin: ILoginState = {
    isLoggedIn: false,
    id: 0,
    username: '',
    password: '',
};

type PayloadLogin = {
    username: string,
    password: string
}

const loginSlice = createSlice({
    name: "login",
    initialState: initialStateLogin,
    reducers: {
        loginRequest: (state, action: PayloadAction<PayloadLogin>) => {
            return {
                ...state,
                username: action.payload.username,
                password: action.payload.password
            };
        },
        loginSuccess: (state) => {
            return {
                ...state,
                id: 1,
                isLoggedIn: true,
            };
        },
        logOut: () => {
            return initialStateLogin;
        }
    }
})

const { actions, reducer } = loginSlice
const loginReducer = reducer
export const { loginSuccess, logOut, loginRequest } = actions
export default loginReducer