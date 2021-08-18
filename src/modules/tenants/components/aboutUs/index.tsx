import { FC } from "react";
import {
  RouteComponentProps,

} from "@reach/router";
interface AbousUsProps extends RouteComponentProps {}
const AboutUs: FC<AbousUsProps> = (props) => {
  return (
    <>
      <h3>Sobre Nosotros</h3>
    </>
  );
};

export default AboutUs;
