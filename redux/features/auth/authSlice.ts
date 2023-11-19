import { userAndToken } from '@/types/userAndTokensType';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface userAndTokenInt {
  userAndToken: userAndToken | null;
}

const initialState: userAndTokenInt = {
  userAndToken: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<userAndToken>) => {
      state.userAndToken = action.payload;
    },
    logOut: (state) => {
      state.userAndToken = null;
    },
  },
});

export const { login, logOut } = authSlice.actions;
export default authSlice.reducer;
