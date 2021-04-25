import { Button } from "primereact/button";
import { PropsWithChildren } from "react";
interface SubmitButtonProps extends React.HTMLProps<HTMLButtonElement> {
  text: string;
  onSubmit?: () => void;
  onClick?: () => void;
}
const SubmitButton: React.FC<SubmitButtonProps> = ({onSubmit, text}: PropsWithChildren<SubmitButtonProps>) => {
  return (
    <Button type="submit" className="p-mr-2" label={text} onSubmit={onSubmit} />
  );
};

export default SubmitButton;
