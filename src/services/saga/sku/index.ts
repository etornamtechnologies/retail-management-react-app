import {all, call, put, takeLatest, takeLeading} from 'redux-saga/effects'
import {Creators, Types} from '../../redux/sku/actions'
import {
  fetchSkus as fetchSkusApi,
  createSku as createSkuApi,
  updateSku as updateSkuApi,
  deleteSku as deleteSkuApi
} from '../../api/sku'
import { message } from 'antd';
import { getErrorFromHttpResponse } from '../../../utils/common-helper';

export function* getSkus(action: ReduxAction) {
  const { query } = action
  try {
    const response: ResponseData<ISku[]> = yield call(fetchSkusApi, query)
    if(response.code === 0) {
      yield put(Creators.getSkusSuccess(response.data))
    } else {
      yield put(Creators.getSkusFailure(response.message))
      message.error(response.message)
    }
  } catch(error: any) {
    yield put(Creators.getSkusFailure(getErrorFromHttpResponse(error)))
  }
}

export function* createSku(action: ReduxAction) {
  const { payload } = action
  try {
    const response: ResponseData<ISku> = yield call(createSkuApi, payload)
    if(response.code === 0) {
      yield put(Creators.createSkuSuccess(response.data))
    } else {
      yield put(Creators.createSkuFailure(response.message))
      message.error(response.message)
    }
  } catch(error: any) {
    yield put(Creators.createSkuFailure(getErrorFromHttpResponse(error)))
  }
}

export function* updateSku(action: ReduxAction) {
  const { id, payload } = action
  try {
    const response: ResponseData<ISku> = yield call(updateSkuApi, id as number, payload)
    if(response.code === 0) {
      yield put(Creators.updateSkuSuccess(response.data))
    } else {
      yield put(Creators.updateSkuFailure(response.message))
      message.error(response.message)
    }
  } catch(error: any) {
    yield put(Creators.updateSkuFailure(getErrorFromHttpResponse(error)))
  }
}

export function* deleteSku(action: ReduxAction) {
  const { id } = action
  try {
    const response: ResponseData<void> = yield call(deleteSkuApi, id as number)
    if(response.code === 0) {
      yield put(Creators.deleteSkuSuccess(id))
    } else {
      yield put(Creators.deleteSkuFailure(response.message))
      message.error(response.message)
    }
  } catch(error: any) {
    yield put(Creators.deleteSkuFailure(getErrorFromHttpResponse(error)))
  }
}

export default function* skuSaga(){
  yield all([
    takeLatest(Types.GET_SKUS, getSkus),
    takeLeading(Types.CREATE_SKU, createSku),
    takeLeading(Types.UPDATE_SKU, updateSku),
    takeLeading(Types.DELETE_SKU, deleteSku)
  ])
}