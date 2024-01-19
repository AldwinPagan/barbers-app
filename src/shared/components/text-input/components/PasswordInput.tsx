import { Password } from "primereact/password";
import { FC } from "react";
import { UseFormRegister, DeepMap, FieldError, Path } from "react-hook-form";
interface PasswordInputProps {
  label: Path<any>;
  register: UseFormRegister<any>;
  errors: DeepMap<any, FieldError>;
  required?: boolean;
}
const PasswordInput: FC<PasswordInputProps> = ({ label, register, errors }) => {
  return (
    <>
      <Password
        feedback={false}
        id={label}
        className={`${errors.password && "p-invalid"}`}
        {...register(label, { required: "Password is required" })}
      />
      {errors.password && (
        <small className="p-error">{errors.password.message}</small>
      )}
    </>
  );
};

export default PasswordInput;
