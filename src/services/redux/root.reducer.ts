import {combineReducers} from "redux"
import authReducer from "./auth/reducer"
import userReducer from "./user/reducer"
import productCategoryReducer from './product-category/reducer'

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    product_category: productCategoryReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer;