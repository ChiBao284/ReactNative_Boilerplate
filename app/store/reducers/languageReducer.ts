import * as types from '@store/actions/types'
const initialState = {
  language: 'vi'
}
import { changeLanguage } from "@store/actions/changeLanguageActions";
export const languageReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.language
      }
    default:
      return state
  }
}