import {Colors} from './types';
import {dark, light} from './colors';

export interface WalletTheme {
  colors: Colors;
}

export const darkTheme: WalletTheme = {
  colors: dark,
};
export const lightTheme: WalletTheme = {
  colors: light,
};
