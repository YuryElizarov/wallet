import React from 'react';
import Login from './Login';
import styled from 'styled-components/native';
import {useUserState} from '../store/user/hooks';
import Wallet from './Wallet';

const Body = styled.View`
  background: ${({theme}) => theme.colors.body};
`;
function Index() {
  const {isAuth} = useUserState();
  return <Body>{!isAuth ? <Login /> : <Wallet />}</Body>;
}

export default Index;
