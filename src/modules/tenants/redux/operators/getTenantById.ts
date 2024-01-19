import { Tenant } from "../../models/Tenant";
import { tenantService } from "../../services";
import * as actionCreators from "../actionCreators";
function getTenantById(tenantId: string) {
  console.log("In getTenantById")
  return async (dispatch: any) => {
    dispatch(actionCreators.gettingTenantById());

    const result = await tenantService.getTenant(tenantId);

    if (result.isLeft()) {
      const error: string = result.value;
      dispatch(actionCreators.bookingAppointmentFailure(error));
    } else {
      const tenant: Tenant = result.value.getValue();
      dispatch(actionCreators.gettingTenantByIdSuccess(tenant));
    }
    console.log("getTenantById executed")

  };
}

export { getTenantById };
