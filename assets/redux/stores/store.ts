import { legacy_createStore as CreateStore, Store, applyMiddleware } from 'redux';
import { MainReducer } from '../reducers/Main.reducer';
import logger from 'redux-logger';

// export const MainStore: Store = CreateStore(MainReducer, applyMiddleware(logger))
export const MainStore: Store = CreateStore(MainReducer)