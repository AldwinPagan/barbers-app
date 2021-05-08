import { Booking } from "../../models/Booking";
import * as actionCreators from "../actionCreators";
import { appointmentService } from "../../services";
function submitBooking(booking: Booking) {
  return async (dispatch: any) => {
    dispatch(actionCreators.bookingAppointment());

    const result = await appointmentService.bookAppointment(booking);

    if (result.isLeft()) {
      const error: string = result.value;
      dispatch(actionCreators.bookingAppointmentFailure(error));
    } else {
      dispatch(actionCreators.bookingAppointmentSuccess());
    }
  };
}

export { submitBooking };
