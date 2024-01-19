import { Router } from "@reach/router";
import App from "./App";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import TenantPage from "./pages/TenantPage";
import { FC } from "react";
import { Booking } from "./modules/tenants/components";
import { Redirect } from "react-router-dom";
export const AppRoutes: FC = () => {
  return (
    <Router>
      {/* <Switch>
        <Route exact path="/" component={App} />
        <Route path="/auth/login" component={LoginPage} />
        <Route path="/auth/forgot-password" component={ForgotPasswordPage} />
        <Route path="/tenant/:tenantId" component={TenantPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch> */}
      <App path="/" />
      <TenantPage path="/tenant/:tenantId/*" />
      
      <NotFoundPage default />
    </Router>
  );
};
