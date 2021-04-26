import { FC } from "react";
import { Card } from "primereact/card";
import {
  SubmitButton,
  TextNavigationButton,
} from "../shared/components/buttons";
import { EmailInput, PasswordInput } from "../shared/components/text-input";
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
            <EmailInput register={register} errors={errors} />
          </div>
          <div className="p-field">
            <PasswordInput register={register} errors={errors} />
          </div>
        </div>
        <div className="p-grid p-justify-between p-mt-3">
          <TextNavigationButton text="Forgot Password?" to="forgot-password" />
          <SubmitButton text="Login" />
        </div>
      </form>
    </Card>
  );
};

export default LoginPage;
