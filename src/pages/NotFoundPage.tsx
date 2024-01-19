import { FC } from "react";
import { RouteComponentProps } from "@reach/router";

const NotFoundPage: FC<RouteComponentProps> = (props) => {
  console.log(props);
  return (
    <h3>
      No match for <code>{props.location?.pathname}</code>
    </h3>
  );
};

export default NotFoundPage;
