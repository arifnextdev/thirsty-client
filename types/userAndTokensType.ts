import { userType } from './user';

export type userAndToken = {
  user: userType;
  token: string;
} | null;
