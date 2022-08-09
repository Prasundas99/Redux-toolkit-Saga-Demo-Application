import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import CatReducer from './cat/catState';
import catSaga from './cat/catSaga';

const saga = createSagaMiddleware();
const store = configureStore({
    reducer: {
        cats: CatReducer
    },
    middleware: [saga]
});
saga.run(catSaga);

export default store;