import { FC, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import "primeflex/primeflex.css";
export const LoginPage: FC = () => {
  const [password, setPassword] = useState<string | undefined>(undefined);
  const [username, setUsername] = useState<string | undefined>(undefined);

  const footer = (
    <div className="p-grid p-justify-between">
      <Button className="p-button-link" label="Forgot Password?" />
      <Button className="p-mr-2" label="Login" />
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
            placeholder={"user@example.com"}
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
          />
        </div>
        <div className="p-field">
          <label htmlFor="password">Password</label>
          <Password
            id="password"
            toggleMask={true}
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </div>
      </div>
    </Card>
  );
};
