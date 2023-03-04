import React, {useMemo} from 'react';
import styled, {useTheme} from 'styled-components/native';
import {CheckboxIcon} from '../Svgs';
import Account from './Account';
import {useWalletAction, useWalletState} from '../../store/wallet/hooks';

const Wrapper = styled.View`
  padding: 20px;
  margin-top: 10px;
  width: 100%;
`;

const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  align-content: center;
  justify-content: space-between;
`;

const TitleWrapper = styled.View`
  padding-left: 10px;
  border-left-color: ${({theme}) => theme.colors.blue};
  border-left-width: 2px;
  border-left-style: solid;
`;

const Title = styled.Text`
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.3px;
  color: ${({theme}) => theme.colors.content};
  opacity: 0.7;
`;

const CheckboxBlock = styled.View`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  gap: 10px;
  flex-direction: row;
`;

const Label = styled.Text`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-align: right;
  color: ${({theme}) => theme.colors.content};
`;

const CheckInput = styled.Pressable`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  padding: 4px;
  gap: 10px;
  width: 24px;
  height: 24px;
  background: ${({theme}) => theme.colors.content};
  border-radius: 4px;
`;

// const ListScroll = styled.ScrollView`
//   width: 100%;
//   margin-top: 30px;
//   flex: 1;
// `;
const List = styled.View`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  width: 100%;
  gap: 30px;
  margin-top: 30px;
`;

function Index() {
  const {isHideZeroBalance, accounts} = useWalletState();
  const {onToggleZeroBalance} = useWalletAction();
  const theme = useTheme();

  const list = useMemo(
    () =>
      isHideZeroBalance
        ? accounts.filter(item => parseFloat(item.amount) > 0)
        : accounts,
    [accounts, isHideZeroBalance],
  );

  return (
    <Wrapper>
      <Header>
        <TitleWrapper>
          <Title>Мои счета</Title>
        </TitleWrapper>
        <CheckboxBlock>
          <Label>Скрыть {'\n'}нулые балансы</Label>
          <CheckInput onPress={onToggleZeroBalance}>
            {isHideZeroBalance && <CheckboxIcon color={theme.colors.body} />}
          </CheckInput>
        </CheckboxBlock>
      </Header>
      {/*<ListScroll>*/}
      <List>
        {list.map((account, id) => (
          <Account key={`Account-${id}`} {...account} />
        ))}
      </List>
      {/*</ListScroll>*/}
    </Wrapper>
  );
}

export default Index;
