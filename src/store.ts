import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';
import rootReducer from './services/redux/root.reducer'
import rootSaga from './services/saga'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux"

export const useAppDispatch = () => useDispatch<ReduxDispatchType>()
export const useAppSelector: TypedUseSelectorHook<ReduxStateType> = useSelector

const logger = createLogger();
// function isDev(): boolean {
//   return process.env.NODE_ENV === "development";
// }
//saga middleware
const sagaMiddleware = createSagaMiddleware()


//only apply logger middleware on development mode 
// const middlewares = [sagaMiddleware, isDev() && logger].filter(Boolean);
//const middlewares = [sagaMiddleware, isDev() && logger];

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, logger)
)

sagaMiddleware.run(rootSaga)

export type ReduxDispatchType = typeof store.dispatch

export type ReduxStateType = ReturnType<typeof store.getState>

export default store;