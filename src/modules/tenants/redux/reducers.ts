import states, { TenantState } from "./states";
import * as actions from "./actions";
import { ReduxUtils } from "../../../shared/utils/ReduxUtils";
import { TenantAction } from "./actionCreators";
export default function tenantReducer(
  state: TenantState = states,
  action: TenantAction
): TenantState {
  switch (action.type as actions.TenantActionType) {
    case actions.BOOKING_PROVIDER_AND_SERVICES:
      console.log("reducer", { ...state.bookingForm }, action);
      return {
        ...state,
        ...ReduxUtils.reportEventStatus("isFillingBookingForm"),
        bookingForm: { ...action.bookingForm },
      };

    case actions.BOOKING_DATE_TIME:
      console.log(state.bookingForm);
      return {
        ...state,
        ...ReduxUtils.reportEventStatus("isFillingBookingForm"),
        bookingForm: { ...action.bookingForm },
      };
    case actions.BOOKING_APPOINTMENT:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus("isFillingBookingForm"),
      };
    case actions.BOOKING_APPOINTMENT_SUCCESS:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus("isFillingBookingForm", true),
      };
    case actions.BOOKING_APPOINTMENT_FAILURE:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus("isFillingBookingForm", false),
        error: "",
      };
    case actions.GETTING_TENANT_BY_ID:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus("isGettingTenantById"),
        error: "",
      };
    case actions.GETTING_TENANT_BY_ID_SUCCESS:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus("isGettingTenantById", true),
        error: "",
        tenant: action.tenant,
      };
    case actions.GETTING_TENANT_BY_ID_FAILURE:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus("isGettingTenantById", false),
        error: action.error,
      };
    default:
      return state;
  }
}
