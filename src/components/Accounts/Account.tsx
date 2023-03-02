import React, {useMemo} from 'react';
import styled from 'styled-components/native';
import * as IconModule from '../Svgs';
import {IAccount} from '../../config/accounts';

const Icons = IconModule as unknown as {[key: string]: React.FC<any>};

const IconElement = ({iconName}: {iconName: string}) => {
  const Icon = Icons[iconName];
  return <Icon width="36px" height="36px" />;
};

const AccountView = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 16px;
`;

const AccountIcon = styled.View`
  width: 45.59px;
  height: 45.59px;
  background: ${({theme}) => theme.colors.contentOpacity};
  border-radius: 8.04554px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

const DescView = styled.View`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 4px;
`;

const Title = styled.Text`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.3px;
  color: ${({theme}) => theme.colors.content};
  opacity: 0.7;
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
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.3px;
  color: ${({theme}) => theme.colors.content};
`;

const SmallBalance = styled.Text`
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.3px;
  color: ${({theme}) => theme.colors.content};
`;

const CurrencyLabel = styled.Text`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.3px;
  color: ${({theme}) => theme.colors.content};
`;

const DopText = styled.Text`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.3px;
  color: ${({theme}) => theme.colors.content};
`;
function Account({title, usd, amount, currency}: IAccount) {
  const {ceil, remainder} = useMemo(() => {
    const [v_ceil, v_remainder] = amount.split(',');
    return {
      ceil: v_ceil || '0',
      remainder: v_remainder || '00000',
    };
  }, [amount]);
  return (
    <AccountView>
      <AccountIcon>
        <IconElement iconName={`${title}Icon`} />
      </AccountIcon>
      <DescView>
        <Title>{title}</Title>
        <BalanceBlock>
          <MainBalance>
            {ceil}
            <SmallBalance>,{remainder}</SmallBalance>
          </MainBalance>
          <CurrencyLabel>{currency}</CurrencyLabel>
          <DopText>≈</DopText>
          <DopText>{usd} USD</DopText>
        </BalanceBlock>
      </DescView>
    </AccountView>
  );
}

export default Account;
