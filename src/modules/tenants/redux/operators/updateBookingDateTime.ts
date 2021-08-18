import { Booking } from "../../models/Booking";
import * as actionCreators from "../actionCreators";
function updateBookingDateTime(bookingForm: Booking) {
  return function (dispatch: any)  {
    dispatch(actionCreators.bookingDateTime(bookingForm));
  };
}

export { updateBookingDateTime };
