import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import { LoginPage } from "./pages/LoginPage";
export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/forgot-password">
          <ForgotPasswordPage />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
