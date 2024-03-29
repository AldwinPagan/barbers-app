import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { AppRoutes } from "./AppRoutes";
import configureStore from "./shared/infra/redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";
const store = configureStore({});
ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <AppRoutes />
    </ReduxProvider>
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
