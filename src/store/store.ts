import { applyMiddleware } from 'redux';
import {createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './rootReducer';
import rootSaga from './sagas';


const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware),
));

// then run the sagas
sagaMiddleware.run(rootSaga)