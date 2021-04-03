import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";
import {
  SubmitButton,
  BackNavigationButton,
} from "../shared/components/buttons";

const ForgotPasswordPage: React.FC = () => {
  const [username, setUsername] = useState<string | undefined>(undefined);

  const isFormValid = (): boolean => {
    return true;
  };

  const submitForgotPasswordRequest = (): void => {
    if (isFormValid()) {
      console.log("Forgot Password Request submitted");
    }
  };

  const header = <BackNavigationButton to="/login" text="Back" />;
  const footer = (
    <div className="p-grid p-justify-end">
      <SubmitButton
        text="Submit"
        onClick={() => submitForgotPasswordRequest()}
      />
    </div>
  );

  return (
    <Card
      className="p-shadow-10 p-d-block p-mx-auto"
      style={{ width: "25rem" }}
      title="Forgot Password"
      header={header}
      footer={footer}
    >
      <div className="p-fluid">
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
      </div>
    </Card>
  );
};

export default ForgotPasswordPage;
