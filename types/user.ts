import { bookingType } from './booking';
import { commonType } from './commonType';

export type userType = {
  name: string;
  email: string;
  password: string;
  photoURl: string;
  address: string;
  phoneNumber?: string;
  role: 'user' | 'admin';
  bookings: bookingType;
} & commonType;
