import { commonType } from './commonType';
import { beautyPackageType } from './beautyPackageItem';
import { userType } from './user';

export type bookingType = {
  user: userType;
  beautyPackage: beautyPackageType;
} & commonType;
