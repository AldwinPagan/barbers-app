import { FC } from "react";
import { Booking } from "../modules/events/components";
import { TabMenu } from "primereact/tabmenu";
import { MenuItem } from "primereact/components/menuitem/MenuItem";
import { RouteComponentProps, Router, Redirect } from "@reach/router";
import { Card } from "primereact/card";
import NotFoundPage from "./NotFoundPage";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as eventOperators from "../modules/events/redux/operators";
import { EventState } from "../modules/events/redux/states";

interface TenantPageProps
  extends eventOperators.IEventOperators,
    RouteComponentProps {
  events: EventState;
}
const TenantPage: FC<TenantPageProps> = (props) => {
  // console.log(props);

  const menuItems: MenuItem[] = [
    {
      label: "About Us",
      icon: "pi pi-fw pi-home",
      url: `${props.uri}/about-us`,
    },
    {
      label: "Booking",
      icon: "pi pi-fw pi-calendar",
      url: `${props.uri}/booking`,
    },
  ];

  return (
    <>
      <img
        src="https://via.placeholder.com/2040x250?text=Page+Header+Image"
        alt="header"
        style={{ height: "100%", width: "100%" }}
      />
      <TabMenu model={menuItems} />
      <Card
        className="p-shadow-10 p-d-block p-mx-auto p-mt-6"
        style={{ width: "75%" }}
      >
        <Router basepath="/tenant/:tenantId/*">
          {/* <Redirect from="/" to="provider-and-service-selection" /> */}
          <NotFoundPage default />
          <Booking path="booking" {...props} />
        </Router>
      </Card>
    </>
  );
};
function mapStateToProps({ events }: { events: EventState }) {
  return {
    events,
  };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(
    {
      ...eventOperators,
    },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(TenantPage);
