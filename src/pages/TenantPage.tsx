import { FC, ReactNode, useEffect, useState } from "react";
import { Booking, AboutUs } from "../modules/tenants/components";
import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/components/menuitem/MenuItem";

import {
  RouteComponentProps,
  Router,
  Redirect,
  useParams,
  navigate,
} from "@reach/router";
import { Card } from "primereact/card";
import NotFoundPage from "./NotFoundPage";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getTenantById } from "../modules/tenants/redux/operators";
import { TenantState } from "../modules/tenants/redux/states";
import TenantPageSkeleton from "./skeletons/TenantPageSkeleton";

interface TenantPageProps extends RouteComponentProps {
  // tenantOperators: tenantOperators.ITenantOperators;
  // tenants: TenantState;
}
const TenantPage: FC<TenantPageProps> = ({ path, uri }) => {
  // const { tenantId } = useParams();
  const [tenants] = useState<TenantState>();
  // console.log("Tenant Page:", props);
  console.log("init state:", tenants);
  // initializing tenant state
  useEffect(() => {
    // setTimeout(() => {
    console.log("useEffect");
    getTenantById("1");
    // }, 5000);
  }, []);

  const menuItems: MenuItem[] = [
    {
      label: "Sobre Nosotros",
      icon: "pi pi-fw pi-home",
      url: `${uri}/about-us`,
    },
    {
      label: "Agendar Cita",
      icon: "pi pi-fw pi-calendar",
      url: `${uri}/booking`,
    },
  ];

  return (
    <>
      {tenants?.isGettingTenantById && <TenantPageSkeleton />}
      {tenants?.isGettingTenantByIdFailure && <NotFoundPage />}
      {true && (
        <>
          <img
            src="https://via.placeholder.com/2040x100?text=Page+Header+Image"
            alt="header"
            style={{ height: "100%", width: "100%" }}
          />
          {/* TODO: fix flex */}
          <div className="p-mt-3">
            <div className="pd-flex-row">
              <Menu model={menuItems} className="p-shadow-4 p-mr-1" />
            </div>
            <div className="pd-flex-row">
              <Card
                className="p-shadow-4 p-mr-1"
                // style={{ width: "75%" }}
              >
                {/* {props.children} */}
                <Router>
                  {/* <Redirect from="*" to="about-us" /> */}
                  <AboutUs path="about-us" default />
                  <Booking path="booking" />
                  {/* TODO: anything different from defined path goes to not found page*/}

                  {/* <NotFoundPage /> */}
                </Router>
              </Card>
            </div>
          </div>
        </>
      )}
    </>
  );
};
function mapStateToProps({
  tenant,
  isGettingTenantById,
  isGettingTenantByIdSuccess,
  isGettingTenantByIdFailure,
}: TenantState) {
  return {
    tenant,
    isGettingTenantById,
    isGettingTenantByIdSuccess,
    isGettingTenantByIdFailure,
  };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(
    {
      getTenantById,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TenantPage);
