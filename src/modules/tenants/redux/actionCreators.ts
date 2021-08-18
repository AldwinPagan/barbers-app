import { Booking } from "../models/Booking";
import { Tenant } from "../models/Tenant";
import * as actions from "./actions";
export type TenantAction = { [key: string]: actions.TenantActionType | any };

function bookingAppointmentProviderAndServices(
  bookingForm: Booking
): TenantAction {
  return {
    type: actions.BOOKING_PROVIDER_AND_SERVICES,
    bookingForm,
  };
}
function bookingDateTime(bookingForm: Booking): TenantAction {
  return {
    type: actions.BOOKING_DATE_TIME,
    bookingForm,
  };
}
function bookingAppointment(): TenantAction {
  return {
    type: actions.BOOKING_APPOINTMENT,
  };
}
function bookingAppointmentSuccess(): TenantAction {
  return {
    type: actions.BOOKING_APPOINTMENT_SUCCESS,
  };
}
function bookingAppointmentFailure(
  error: string
): TenantAction & { error: string } {
  return {
    type: actions.BOOKING_APPOINTMENT_FAILURE,
    error,
  };
}

function gettingTenantById(): TenantAction {
  return {
    type: actions.GETTING_TENANT_BY_ID,
  };
}
function gettingTenantByIdSuccess(tenant: Tenant): TenantAction {
  return {
    type: actions.GETTING_TENANT_BY_ID_SUCCESS,
    tenant
  };
}
function gettingTenantByIdFailure(error: string): TenantAction & { error: string } {
  return {
    type: actions.GETTING_TENANT_BY_ID_FAILURE,
    error,
  };
}

export {
  bookingAppointmentProviderAndServices,
  bookingDateTime,
  bookingAppointment,
  bookingAppointmentSuccess,
  bookingAppointmentFailure,

  gettingTenantById,
  gettingTenantByIdSuccess,
  gettingTenantByIdFailure,
};
