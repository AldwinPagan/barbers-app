import React from "react";
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";
import {
  SubmitButton,
  BackNavigationButton,
} from "../shared/components/buttons";
import { useForm } from "react-hook-form";

const ForgotPasswordPage: React.FC = () => {
  interface ForgotPasswordFormValues {
    email: string;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormValues>();

  const onSubmit = (data: any): void => {
    console.log(data);
    console.log("Forgot Password Request submitted");
  };

  const header = <BackNavigationButton to="login" text="Back" />;

  return (
    <Card
      className="p-shadow-10 p-d-block p-mx-auto p-mt-6"
      style={{ width: "25rem" }}
      title="Forgot Password"
      header={header}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-fluid">
          <div className="p-field">
            <label htmlFor="email" className={`${errors.email && "p-error"}`}>
              Email
            </label>
            <InputText
              id="email"
              type="text"
              keyfilter="email"
              placeholder="user@example.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email",
                },
              })}
              className={`${errors.email && "p-invalid"}`}
            />
            {errors.email && (
              <small className="p-error">{errors.email?.message}</small>
            )}
          </div>
        </div>
        <div className="p-grid p-justify-end p-mt-3">
          <SubmitButton text="Submit" />
        </div>
      </form>
    </Card>
  );
};

export default ForgotPasswordPage;
