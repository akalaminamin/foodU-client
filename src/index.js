import React from "react";
import ReactDOM from "react-dom/client";
import "./styled/index.css";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from 'redux-persist'
let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
      <ToastContainer position="top-right" autoClose={1000} />
    </Provider>
  </React.StrictMode>
);


// problem list
// 1. product details page count not work with cart page
// 2. user dashboard my order problem not rerender 

// optional
// 4. rating average not render current time
// 5. shop page flex layout mobile responsive not complete
// 6. coupon code apply not complete

// morning first work
// 2. update all dami data
// 4. solve problem list
