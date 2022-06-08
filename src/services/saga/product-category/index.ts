import {all, call, put, takeLatest, takeLeading} from 'redux-saga/effects'
import {Creators, Types} from '../../redux/product-category/actions'
import {
  fetchProductCategories as fetchProductCategoriesApi,
  createProductCategory as createProductCategoryApi,
  updateProductCategory as updateProductCategoryApi,
  deleteProductCategory as deleteProductCategoryApi
} from '../../api/product-category'
import { getErrorFromHttpResponse } from '../../../utils/common-helper';

export function* getProductCategories(action: ReduxAction) {
  const { query } = action
  try {
    const response: ResponseData<IProductCategory[]> = yield call(fetchProductCategoriesApi, query)
    if(response.code === 0) {
      yield put(Creators.getProductCategoriesSuccess(response.data))
    } else {
      yield put(Creators.getProductCategoriesFailure(response.message))
    }
  } catch (error: any) {
    yield put(Creators.getProductCategoriesFailure(getErrorFromHttpResponse(error)))
  }
}

export function* createProductCategory(action: ReduxAction) {
  const { payload } = action
  try {
    const response: ResponseData<IProductCategory[]> = yield call(createProductCategoryApi, payload)
    if(response.code === 0) {
      yield put(Creators.createProductCategorySuccess(response.data))
    } else {
      yield put(Creators.createProductCategoryFailure(response.message))
    }
  } catch (error: any) {
    console.log('error', getErrorFromHttpResponse(error))
    yield put(Creators.createProductCategoryFailure(getErrorFromHttpResponse(error)))
    // message.error(getErrorFromHttpResponse())
  }
}

export function* updateProductCategory(action: ReduxAction) {
  const { id, payload } = action
  try {
    const response: ResponseData<IProductCategory[]> = yield call(updateProductCategoryApi, id as number, payload)
    if(response.code === 0) {
      yield put(Creators.updateProductCategorySuccess(response.data))
    } else {
      yield put(Creators.updateProductCategoryFailure(response.message))
    }
  } catch (error: any) {
    yield put(Creators.updateProductCategoryFailure(getErrorFromHttpResponse(error)))
  }
}

export function* deleteProductCategory(action: ReduxAction) {
  const { id } = action
  try {
    const response: ResponseData<IProductCategory[]> = yield call(deleteProductCategoryApi, id as number)
    if(response.code === 0) {
      yield put(Creators.deleteProductCategorySuccess(id))
    } else {
      yield put(Creators.deleteProductCategoryFailure(response.message))
    }
  } catch (error: any) {
    yield put(Creators.deleteProductCategoryFailure(getErrorFromHttpResponse(error)))
  }
}


export default function* productCategorySaga() {
  yield all([
    takeLeading(Types.GET_PRODUCT_CATEGORIES, getProductCategories),
    takeLeading(Types.CREATE_PRODUCT_CATEGORY, createProductCategory),
    takeLeading(Types.UPDATE_PRODUCT_CATEGORY, updateProductCategory),
    takeLatest(Types.DELETE_PRODUCT_CATEGORY, deleteProductCategory)
  ])
}