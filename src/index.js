import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux'; // CONNECT STATE TO VIEW
import store, {history} from './store'; // if without {} = default, else const
import {ConnectedRouter} from 'react-router-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <App/>
            </div>
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
