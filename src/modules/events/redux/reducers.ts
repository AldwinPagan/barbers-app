import states, { EventState } from "./states";
import * as actions from "./actions";
import { ReduxUtils } from "../../../shared/utils/ReduxUtils";
import { EventAction } from "./actionCreators";
export default function appointmentReducer(
  state: EventState = states,
  action: EventAction
): EventState {
  switch (action.type as actions.EventActionType) {
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
    default:
      return state;
  }
}
