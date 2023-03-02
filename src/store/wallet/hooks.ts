import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../index';
import {useCallback, useMemo} from 'react';
import {toggleBalance, toggleShowAssets} from './walletSlice';

export const getWallet = (state: RootState) => state.wallet;

export function useWalletAction() {
  const dispatch = useDispatch<AppDispatch>();
  const onToggleZeroBalance = useCallback(
    () => dispatch(toggleBalance()),
    [dispatch],
  );
  const onToggleShowAssets = useCallback(
    () => dispatch(toggleShowAssets()),
    [dispatch],
  );
  return useMemo(() => {
    return {
      onToggleZeroBalance,
      onToggleShowAssets,
    };
  }, [onToggleZeroBalance, onToggleShowAssets]);
}
export function useWalletState() {
  return useSelector(getWallet);
}
