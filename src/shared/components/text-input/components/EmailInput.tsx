import { FC } from "react";
import { InputText } from "primereact/inputtext";
import { DeepMap, FieldError, Path, UseFormRegister } from "react-hook-form";

interface EmailInputProps {
  label: Path<any>;
  register: UseFormRegister<any>;
  errors?: DeepMap<any, FieldError>;
  required?: boolean;
}
const EmailInput: FC<EmailInputProps> = ({
  label,
  register,
  errors,
  required = true,
}) => {
  const EMAIL_EXPRESSION = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  return (
    <>
      <InputText
        id={label}
        type="text"
        keyfilter="email"
        placeholder="user@example.com"
        {...register(label, {
          required: required && "Email is required",
          pattern: {
            value: EMAIL_EXPRESSION,
            message: "Invalid email",
          },
        })}
        className={`${errors && "p-invalid"}`}
      />
      {errors && (
        <small className="p-error">{errors?.message}</small>
      )}
    </>
  );
};

export default EmailInput;
