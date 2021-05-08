import { Booking } from "../../models/Booking";
import * as actionCreators from "../actionCreators";
function updateBookingProviderAndServices(bookingForm: Booking) {
  return function (dispatch: any) {
    dispatch(
      actionCreators.bookingAppointmentProviderAndServices(bookingForm)
    );
  };
}

export { updateBookingProviderAndServices };
