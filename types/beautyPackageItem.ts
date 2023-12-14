import { bookingType } from './booking';
import { commonType } from './commonType';
import { speciallisType } from './specialists';

export type beautyPackageType = {
  title: string;
  description: string;
  category: string;
  images: string[];
  price: number;
  speciallist: speciallisType[];
  bookings: bookingType[];
} & commonType;
