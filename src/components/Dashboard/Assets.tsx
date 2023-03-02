import React from 'react';
import styled from 'styled-components/native';
import {useWalletState} from '../../store/wallet/hooks';

const AssetBlock = styled.View`
  margin-top: 11px;
  width: 100%;
`;

const BalanceBlock = styled.View`
  display: flex;
  align-items: baseline;
  align-content: center;
  justify-content: flex-start;
  gap: 10px;
  flex-direction: row;
`;

const MainBalance = styled.Text`
  font-weight: 700;
  font-size: 30px;
  line-height: 39px;
  text-align: center;
  letter-spacing: -0.3px;
  color: ${({theme}) => theme.colors.content};
`;

const SmallBalance = styled.Text`
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.3px;
  color: ${({theme}) => theme.colors.content};
`;

const CurrencyLabel = styled.Text`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.3px;
  color: ${({theme}) => theme.colors.content};
`;

const DopText = styled.Text`
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.3px;
  color: ${({theme}) => theme.colors.content};
`;

const PnlBlock = styled.View`
  padding: 4px 10px;
  gap: 10px;
  border: 1px solid ${({theme}) => theme.colors.green};
  border-radius: 4px;
  margin-top: 8px;
  display: flex;
  max-width: 50%;
`;

const PnlText = styled.Text`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.3px;
  opacity: 0.7;
  color: ${({theme}) => theme.colors.content};
`;
function Assets() {
  const {isShowAssets} = useWalletState();
  return (
    <AssetBlock>
      <BalanceBlock>
        <MainBalance>
          {isShowAssets ? (
            <>
              1 039<SmallBalance>,98</SmallBalance>
            </>
          ) : (
            <>
              *<SmallBalance>,**</SmallBalance>
            </>
          )}
        </MainBalance>
        <CurrencyLabel>RUB</CurrencyLabel>
        <DopText>≈</DopText>
        {isShowAssets ? (
          <DopText>14,87 USD</DopText>
        ) : (
          <DopText>*,** USD</DopText>
        )}
      </BalanceBlock>
      <PnlBlock>
        <PnlText>PnL + $0.90 (+0.04 %)</PnlText>
      </PnlBlock>
    </AssetBlock>
  );
}

export default Assets;
