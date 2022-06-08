import {combineReducers} from "redux"
import authReducer from "./auth/reducer"
import userReducer from "./user/reducer"
import productCategoryReducer from './product-category/reducer'
import productReducer from './product/reducer'
import skuReducer from './sku/reducer'

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    product_category: productCategoryReducer,
    product: productReducer,
    sku: skuReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer;