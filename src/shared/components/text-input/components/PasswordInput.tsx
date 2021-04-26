import { Password } from "primereact/password";
import { FC } from "react";
import { UseFormRegister, DeepMap, FieldError } from "react-hook-form";
interface PasswordInputProps {
  register: UseFormRegister<any>;
  errors: DeepMap<any, FieldError>;
  required?: boolean;
}
const PasswordInput: FC<PasswordInputProps> = ({ register, errors }) => {
  return (
    <>
      <Password
        feedback={false}
        id="password"
        className={`${errors.password && "p-invalid"}`}
        {...register("password", { required: "Password is required" })}
      />
      {errors.password && (
        <small className="p-error">{errors.password.message}</small>
      )}
    </>
  );
};

export default PasswordInput;
