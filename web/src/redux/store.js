import { combineReducers,createStore,applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga'
import reducer from './rootReducer'
import rootSagas from "./rootsaga";


const sagaMiddleware = createSagaMiddleware()
const middlelware =[sagaMiddleware]


const store = compose(
    applyMiddleware(...middlelware),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
)(createStore)(reducer)

 sagaMiddleware.run(rootSagas)

export default store;