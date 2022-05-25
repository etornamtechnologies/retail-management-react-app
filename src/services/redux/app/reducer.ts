import {createReducer} from 'reduxsauce'
import Types from './actionTypes'

const INITIAL_STATE = {
  theme: 'light',
}

export const changeTheme = (state = INITIAL_STATE, action: {theme: string}) => {
  return {
    ...state,
    theme: action.theme,
  }
}

export const HANDLERS = {
  [Types.CHANGE_THEME]: changeTheme,
}

export default createReducer(INITIAL_STATE, HANDLERS);