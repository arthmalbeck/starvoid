import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootSaga, { rootReducer } from '../handler/index';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
    applyMiddleware(
        sagaMiddleware
    ));


const store = createStore(
    combineReducers({
        entities: combineReducers({
            ...rootReducer,
        })
    }),
    enhancer
);

sagaMiddleware.run(rootSaga);

export default store;