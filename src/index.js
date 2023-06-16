import React from "react";
import ReactDOM from "react-dom";
import "./styles/global.scss";
import App from "./views/App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import authReducer from "../src/store/reducers/authReducer";
import userReducer from "./store/reducers/userReducer";
const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});
const reduxStore = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
