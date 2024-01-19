import { InputMask } from "primereact/inputmask";
import { FC } from "react";
import { DeepMap, FieldError, Path, UseFormRegister } from "react-hook-form";
interface PhoneNumberInputProps {
  label: Path<any>;
  register: UseFormRegister<any>;
  errors?: DeepMap<any, FieldError>;
  required?: boolean;
}
const PhoneNumberInput: FC<PhoneNumberInputProps> = ({
  label,
  register,
  errors,
  required = true,
}) => {
  return (
    <>
      <InputMask
        id={label}
        className={`${errors && "p-invalid"}`}
        mask="(999) 999-9999"
        placeholder="(999) 999-9999"
        {...register(label, { required: required && "Phone Number is required" })}
      />
      {errors && (
        <small className="p-error">{errors?.message}</small>
      )}
    </>
  );
};

export default PhoneNumberInput;
