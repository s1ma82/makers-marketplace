import React from "react";
import {render} from 'react-dom'
import {createStore, compose} from 'redux'
import { Provider } from "react-redux";
import rootReducer from "./redux/rootReducer";
import App from "./App/app";
import './fonts/fonts.css'
import './style.scss'
import 'normalize.css'

const store = createStore(
    rootReducer,
    compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)
render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)