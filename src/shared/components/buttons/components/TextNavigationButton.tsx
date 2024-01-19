import React from "react";
import { Link } from "@reach/router";
import { Button } from "primereact/button";

interface TextNavigationButtonProps extends React.HTMLProps<HTMLInputElement> {
  to: string;
  text: string;
}

const TextNavigationButton: React.FC<TextNavigationButtonProps> = (props) => (
  <Link to={props.to} style={{ textDecoration: "none" }}>
    <Button className="p-button-text p-ml-2 p-mt-2" label={props.text} />
  </Link>
);

export default TextNavigationButton;
