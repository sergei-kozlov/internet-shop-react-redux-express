import {applyMiddleware, createStore} from "redux";
import createRootReducer from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import {createBrowserHistory} from "history";
import thunk from "redux-thunk";
import {routerMiddleware} from "connected-react-router";



const history = createBrowserHistory();
const middlewares = [thunk, routerMiddleware(history)];
const store = createStore(
    createRootReducer(history),
    composeWithDevTools(applyMiddleware(...middlewares))
);

export {
    store,
    history
};

