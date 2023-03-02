import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../index';
import {useCallback, useMemo} from 'react';
import {login} from './userSlice';

export const getUser = (state: RootState) => state.user;

export function useUserAction() {
  const dispatch = useDispatch<AppDispatch>();
  const onLogin = useCallback(() => dispatch(login()), [dispatch]);
  return useMemo(() => {
    return {
      onLogin,
    };
  }, [onLogin]);
}
export function useUserState() {
  return useSelector(getUser);
}
