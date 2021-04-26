import { FC } from "react";
import { InputText } from "primereact/inputtext";
import { DeepMap, FieldError, UseFormRegister } from "react-hook-form";

interface EmailInputProps {
  register: UseFormRegister<any>;
  errors: DeepMap<any, FieldError>;
  required?: boolean;
}
const EmailInput: FC<EmailInputProps> = ({
  register,
  errors,
  required = true,
}) => {
  const EMAIL_EXPRESSION = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  return (
    <>
      <InputText
        id="email"
        type="text"
        keyfilter="email"
        placeholder="user@example.com"
        {...register("email", {
          required: required && "Email is required",
          pattern: {
            value: EMAIL_EXPRESSION,
            message: "Invalid email",
          },
        })}
        className={`${errors.email && "p-invalid"}`}
      />
      {errors.email && (
        <small className="p-error">{errors.email?.message}</small>
      )}
    </>
  );
};

export default EmailInput;
