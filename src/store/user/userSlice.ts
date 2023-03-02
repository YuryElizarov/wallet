import {createSlice} from '@reduxjs/toolkit';

export interface AppState {
  isAuth: boolean;
}

const initialState: AppState = {
  isAuth: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: state => {
      state.isAuth = true;
    },
  },
});

export const {login} = userSlice.actions;
export default userSlice.reducer;
