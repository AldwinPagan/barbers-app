import { InputMask } from "primereact/inputmask";
import { FC } from "react";

const PhoneNumberInput: FC = () => {
  return (
    <InputMask
      mask="(999) 999-9999"
      value=""
      onChange={(e: InputMask.ChangeParams) => console.log(e.value)}
      placeholder="(999) 999-9999"
    />
  );
};

export default PhoneNumberInput;
