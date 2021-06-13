import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from 'react-redux';
import { createStore } from "redux";
import cartReducer from "./Redux/cartReducer";
import { AuthProvider } from "./context/AuthContext";
const store = createStore(cartReducer)
ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
