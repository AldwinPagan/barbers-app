import { Button } from "primereact/button";
interface SubmitButtonProps extends React.HTMLProps<HTMLButtonElement> {
  text: string;
  onClick: () => void;
}
const SubmitButton: React.FC<SubmitButtonProps> = (props) => {
  return (
    <Button className="p-mr-2" label={props.text} onClick={props.onClick} />
  );
};

export default SubmitButton;
