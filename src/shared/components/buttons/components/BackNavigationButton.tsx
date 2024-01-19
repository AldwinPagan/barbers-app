import React from "react";
import { Link } from "@reach/router";
import { Button } from "primereact/button";

interface BackNavigationProps extends React.HTMLProps<HTMLInputElement> {
  to: string;
  text: string;
}

const BackNavigationButton: React.FC<BackNavigationProps> = (props) => (
  <Link to={props.to} style={{ textDecoration: "none" }}>
    <Button
      className="p-button-text p-button-plain p-ml-2 p-mt-2"
      label={props.text}
      icon="pi pi-arrow-left"
    />
  </Link>
);

export default BackNavigationButton;
