import {all, fork} from "@redux-saga/core/effects";

import authSaga from "./auth"
import userSaga from './user'
import productCategorySaga from './product-category'


export default function* rootSaga() {
    yield all([
        fork(authSaga),
        fork(userSaga),
        fork(productCategorySaga)
    ])
}