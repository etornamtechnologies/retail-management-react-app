import {all, call, put, takeLatest, takeLeading} from 'redux-saga/effects'
import {Creators, Types} from '../../redux/product/actions'
import {
  fetchProducts as fetchProductsApi,
  fetchProduct as fetchProductApi,
  createProduct as createProductApi,
  updateProduct as updateProductApi,
  deleteProduct as deleteProductApi
} from '../../api/product'
import { getErrorFromHttpResponse } from '../../../utils/common-helper';

export function* getProducts(action: ReduxAction) {
  const { query } = action
  try {
    const response: ResponseData<IProduct[]> = yield call(fetchProductsApi, query)
    if(response.code === 0) {
      yield put(Creators.getProductsSuccess(response.data))
    } else {
      yield put(Creators.getProductsFailure(response.message))
    }
  } catch (error: any) {
    yield put(Creators.getProductsFailure(getErrorFromHttpResponse(error)))
  }
}

export function* getProduct(action: ReduxAction) {
  const { id } = action
  try {
    const response: ResponseData<IProduct> = yield call(fetchProductApi, id as number)
    if(response.code === 0) {
      yield put(Creators.getProductSuccess(response.data))
    } else {
      yield put(Creators.getProductFailure(response.message))
    }
  } catch (error: any) {
    yield put(Creators.getProductFailure(getErrorFromHttpResponse(error)))
  }
}

export function* createProduct(action: ReduxAction) {
  const { payload } = action
  try {
    const response: ResponseData<IProduct[]> = yield call(createProductApi, payload)
    if(response.code === 0) {
      yield put(Creators.createProductSuccess(response.data))
    } else {
      yield put(Creators.createProductFailure(response.message))
    }
  } catch (error: any) {
    console.log('error', getErrorFromHttpResponse(error))
    yield put(Creators.createProductFailure(getErrorFromHttpResponse(error)))
    // message.error(getErrorFromHttpResponse())
  }
}

export function* updateProduct(action: ReduxAction) {
  const { id, payload } = action
  try {
    const response: ResponseData<IProductCategory[]> = yield call(updateProductApi, id as number, payload)
    if(response.code === 0) {
      yield put(Creators.updateProductSuccess(response.data))
    } else {
      yield put(Creators.updateProductFailure(response.message))
    }
  } catch (error: any) {
    yield put(Creators.updateProductFailure(getErrorFromHttpResponse(error)))
  }
}

export function* deleteProduct(action: ReduxAction) {
  const { id } = action
  try {
    const response: ResponseData<any> = yield call(deleteProductApi, id as number)
    if(response.code === 0) {
      yield put(Creators.deleteProductSuccess(id))
    } else {
      yield put(Creators.deleteProductFailure(response.message))
    }
  } catch (error: any) {
    yield put(Creators.deleteProductFailure(getErrorFromHttpResponse(error)))
  }
}


export default function* productSaga() {
  yield all([
    takeLeading(Types.GET_PRODUCTS, getProducts),
    takeLatest(Types.GET_PRODUCT, getProduct),
    takeLeading(Types.CREATE_PRODUCT, createProduct),
    takeLeading(Types.UPDATE_PRODUCT, updateProduct),
    takeLatest(Types.DELETE_PRODUCT, deleteProduct)
  ])
}