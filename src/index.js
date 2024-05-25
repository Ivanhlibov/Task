import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";

console.log(store.getState());

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store = {store}>
            <App/>
        </Provider>
    </React.StrictMode>

);
