import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IUserState {
  user: any;
  isAuthenticated: boolean;
}

const initialState: IUserState = {
  user: null,
  isAuthenticated: false,
};

export const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    setUser: (state: any, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    setIsAuthenticated: (state: any, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export default userSlice.reducer;

export const { setUser, setIsAuthenticated } = userSlice.actions;
