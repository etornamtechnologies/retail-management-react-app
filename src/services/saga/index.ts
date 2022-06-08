import {all, fork} from "@redux-saga/core/effects";

import authSaga from "./auth"
import userSaga from './user'
import productCategorySaga from './product-category'
import productSaga from './product'
import skuSaga from './sku'


export default function* rootSaga() {
    yield all([
        fork(authSaga),
        fork(userSaga),
        fork(productCategorySaga),
        fork(productSaga),
        fork(skuSaga)
    ])
}