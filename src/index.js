import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './features/counter/Counter';
import store from './data/store';
import { Provider } from 'react-redux'
import Tasklist from "./features/tasklist/tasklist";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Counter />
        <Tasklist />
    </Provider>
);
