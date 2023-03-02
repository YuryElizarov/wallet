import {createSlice} from '@reduxjs/toolkit';
import {accounts, IAccount} from '../../config/accounts';

export interface AppState {
  isHideZeroBalance: boolean;
  isShowAssets: boolean;
  accounts: Array<IAccount>;
}

const initialState: AppState = {
  isHideZeroBalance: false,
  isShowAssets: true,
  accounts: accounts,
};

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    toggleBalance: state => {
      state.isHideZeroBalance = !state.isHideZeroBalance;
    },
    toggleShowAssets: state => {
      state.isShowAssets = !state.isShowAssets;
    },
  },
});

export const {toggleBalance, toggleShowAssets} = walletSlice.actions;
export default walletSlice.reducer;
