/*  ROOT DOCUMENT OF REDUCERS */
/* STORE OTHER REDUCERS IN 'reducers' FOLDER */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'; // reducer to manage routing
import counter from './counter';

export default combineReducers({
   router: routerReducer,
   counter
});
