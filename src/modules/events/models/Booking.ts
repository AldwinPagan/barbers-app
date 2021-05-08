export interface Booking {
  tenantId?: string;
  serviceIds?: number[];
  providerId?: string | null;
  anyProvider?: boolean;
  startTime?: string;
  firstName?: string;
  lastName?: string;
  contactMethod?: string;
  email?: string;
  phoneNumber?: string;
}
