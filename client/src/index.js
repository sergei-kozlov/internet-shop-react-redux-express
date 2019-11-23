import React from 'react';
import ReactDOM from 'react-dom';
import {ConnectedRouter} from 'connected-react-router';
import {Provider} from 'react-redux';
import routes from './routes';
import {history, store} from './store';
import ErrorBoundary from './components/error-boundary';


import ShopHeaderCart from "./components/shop-header/shop-header";

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <ConnectedRouter history={history}>
                <ShopHeaderCart/>
                {routes}
            </ConnectedRouter>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);