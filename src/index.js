import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer";

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<Route component={App}/>
		</Provider>
	</BrowserRouter>,
	document.getElementById("root")
);
registerServiceWorker();
