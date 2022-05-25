import {all, call, put, takeLatest} from 'redux-saga/effects'
import {Creators, Types} from '../../redux/auth/actions'
import {
  signIn as signInApi
} from '../../api/auth-service'
import { history } from '../../../utils/common-helper'

export function* login(action: ReduxAction) {
  const payload = action.payload
  try {
    const response: ResponseData<SignInDTO> = yield call(signInApi, payload as {username: string, password: string})
    console.log('response', response)
    if(response.code === 0) {
      const { access_token, token_type, expires_in, user } = response?.data
      window.localStorage.setItem('access_token', access_token)
      window.localStorage.setItem('token_type', token_type)
      window.localStorage.setItem('token_expires_in', expires_in)
      window.localStorage.setItem('auth_user', JSON.stringify(user))
      yield put(Creators.loginSuccess(response?.data))
      history.push('/')
    }
  } catch (error: any) {
    const errMsg = error?.response?.data?.message || 'Failure';
    yield put(Creators.loginFailure(errMsg))
  }
}

export default function* authSaga() {
  yield all([
    takeLatest(Types.LOGIN, login)
  ])
}