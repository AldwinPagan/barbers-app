import { Booking } from "../models/Booking";
import * as actions from "./actions";
export type EventAction = { [key: string]: actions.EventActionType | any };

function bookingAppointmentProviderAndServices(
  bookingForm: Booking
): EventAction {
  return {
    type: actions.BOOKING_PROVIDER_AND_SERVICES,
    bookingForm,
  };
}
function bookingDateTime(bookingForm: Booking): EventAction {
  return {
    type: actions.BOOKING_DATE_TIME,
    bookingForm,
  };
}
function bookingAppointment(): EventAction {
  return {
    type: actions.BOOKING_APPOINTMENT,
  };
}
function bookingAppointmentSuccess(): EventAction {
  return {
    type: actions.BOOKING_APPOINTMENT_SUCCESS,
  };
}
function bookingAppointmentFailure(
  error: string
): EventAction & { error: string } {
  return {
    type: actions.BOOKING_APPOINTMENT_FAILURE,
    error,
  };
}

export {
  bookingAppointmentProviderAndServices,
  bookingDateTime,
  bookingAppointment,
  bookingAppointmentSuccess,
  bookingAppointmentFailure,
};
