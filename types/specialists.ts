import { bookingType } from './booking';
import { commonType } from './commonType';

export type speciallisType = {
  name: string;
  designation: string;
  bio: string;
  photoURL: string;
  dateOfBirth: string;
  beautyPackages: bookingType;
} & commonType;
