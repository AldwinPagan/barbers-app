import { FC, useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import {
  SubmitButton,
  TextNavigationButton,
} from "../shared/components/buttons";

export const LoginPage: FC = () => {
  const [password, setPassword] = useState<string | undefined>(undefined);
  const [username, setUsername] = useState<string | undefined>(undefined);

  const isFormValid = (): boolean => {
    return true;
  };

  const submitLoginRequest = (): void => {
    if (isFormValid()) {
      console.log("Login Request submitted");
    }
  };

  const footer = (
    <div className="p-grid p-justify-between">
      <TextNavigationButton text="Forgot Password?" to="/forgot-password" />
      <SubmitButton text="Login" onClick={() => submitLoginRequest()} />
    </div>
  );

  return (
    <Card
      className="p-shadow-10 p-d-block p-mx-auto"
      style={{ width: "25rem" }}
      title="Login"
      footer={footer}
    >
      <div className="p-fluid ">
        <div className="p-field">
          <label htmlFor="username">Username</label>
          <InputText
            id="username"
            type="text"
            placeholder="user@example.com"
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
          />
        </div>
        <div className="p-field">
          <label htmlFor="password">Password</label>
          <Password
            toggleMask={true}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </div>
      </div>
    </Card>
  );
};
