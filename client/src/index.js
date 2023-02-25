import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
const rootReducer = combineReducers({user: authReducer});
// 2. create user reducer function
// { type: 'LOGGED_IN_USER', payload: {name: 'Vinay', role: 'Broker'} }
const authReducer = (state = {name: 'vinay', role: 'Broker'}, action) => {
switch (action.type) {
case "LOGGED_IN_USER":
return { ... state, ...action.payload };
case "LOGOUT":
return action.payload;
default:
return state;
}
}
const store = createStore(rootReducer,composeWithDevTools());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
