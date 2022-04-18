import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./rootReducer";
import rootSagas from "./rootsaga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const sagaMiddleware = createSagaMiddleware();
const middlelware = [sagaMiddleware];
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = compose(
  applyMiddleware(...middlelware),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
)(createStore)(persistedReducer);

sagaMiddleware.run(rootSagas);
export const persistor = persistStore(store);
export default store;
