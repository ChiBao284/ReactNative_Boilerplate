/*
 * combines all th existing reducers
 */
// import * as loadingReducer from './loadingReducer';
import loginReducer from './loginSlice';
import themeReducer from './themeSlice';
import languageReducer from './languageSlice'
import dogReducer from './dogSlice'
const allReducer = {
    languageReducer,
    themeReducer,
    loginReducer,
    dogReducer
}
export default allReducer