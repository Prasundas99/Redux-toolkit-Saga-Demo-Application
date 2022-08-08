import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';

import { Provider } from 'react-redux';
import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';

const saga = createSagaMiddleware();
const store = configureStore({
    reducer: {
        cats: createReducer
    },
    middleware: [saga]
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


