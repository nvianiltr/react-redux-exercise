/* handles redux */


import { createStore, applyMiddleware, compose } from 'redux';
/* MIDDLEWARE */
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk'; // for asynchronous function
/* ROUTING */
import createHistory from 'history/createBrowserHistory';
/* REDUCER = usually compiled into one separate folder store in separ */
import rootReducer from './reducers';

export const history = createHistory();

/* MAJOR COMPONENT */
const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
}
/* ... = spread operator */
// daftar middleware dan enhancer //
const composedEnhancers = compose(applyMiddleware(...middleware),...enhancers);

export default createStore(rootReducer, initialState, composedEnhancers);