import React from 'react';
import styled from 'styled-components/native';
import Topbar from '../../components/Topbar';
import Dashboard from '../../components/Dashboard';
import Accounts from '../../components/Accounts';

const WalletScroll = styled.ScrollView`
  width: 100%;
`;

const WalletView = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
`;

function Index() {
  return (
    <WalletScroll>
      <WalletView>
        <Topbar title={'Кошелек'} isShowPrev={false} />
        <Dashboard />
        <Accounts />
      </WalletView>
    </WalletScroll>
  );
}

export default Index;
