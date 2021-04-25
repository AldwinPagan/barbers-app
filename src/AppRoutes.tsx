import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import LoginPage from "./pages/LoginPage";
import TenantPage from "./pages/TenantPage";
import { FC } from "react";

export const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={App} />
      <Route path="/auth/login" component={LoginPage} />
      <Route path="/auth/forgot-password" component={ForgotPasswordPage} />
      <Route exact path="/tenant/:tenantId" component={TenantPage} />
    </BrowserRouter>
  );
};
