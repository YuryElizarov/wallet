import React from 'react';
import styled from 'styled-components/native';
import Topbar from '../../components/Topbar';
import Dashboard from '../../components/Dashboard';
import Accounts from '../../components/Accounts';

const WalletView = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  height: 100%;
  justify-content: flex-start;
`;

function Index() {
  return (
    <WalletView>
      <Topbar title={'Кошелек'} isShowPrev={false} />
      <Dashboard />
      <Accounts />
    </WalletView>
  );
}

export default Index;
