import { FC } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import {
  SubmitButton,
  TextNavigationButton,
} from "../shared/components/buttons";
import { useForm } from "react-hook-form";

interface LoginFormValues {
  email: string;
  password: string;
}
const LoginPage: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const onSubmit = (data: any): void => {
    console.log(data);
    console.log("Login Request submitted");
  };

  return (
    <Card
      className="p-shadow-10 p-d-block p-mx-auto p-mt-6"
      style={{ width: "25rem" }}
      title="Login"
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
          <div className="p-field">
            <label
              htmlFor="password"
              className={`${errors.password && "p-error"}`}
            >
              Password
            </label>
            <Password
              feedback={false}
              id="password"
              className={`${errors.password && "p-invalid"}`}
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <small className="p-error">{errors.password.message}</small>
            )}
          </div>
        </div>
        <div className="p-grid p-justify-between p-mt-3">
          <TextNavigationButton text="Forgot Password?" to="forgot-password" />
          <SubmitButton
            text="Login"
            // disabled={!isValid}
          />
        </div>
      </form>
    </Card>
  );
};

export default LoginPage;
