import React from 'react';
import styled, {useTheme} from 'styled-components/native';
import {
  ArrowOneIcon,
  ArrowRightIcon,
  ArrowThirdIcon,
  ArrowTwoIcon,
  EyeIcon,
  HistoryIcon,
} from '../Svgs';
import Assets from './Assets';
import {useWalletAction} from '../../store/wallet/hooks';

const DashboardWrapper = styled.View`
  width: 100%;
  padding: 10px;
  margin-top: 20px;
`;

const DashboardView = styled.View`
  width: 100%;
  padding: 14px 13px;
  border-radius: 8px;
  background: ${({theme}) => theme.colors.background};
`;

const Label = styled.Text`
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.3px;
  color: ${({theme}) => theme.colors.content};
  margin-right: 12px;
`;

const Header = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  flex-direction: row;
`;

const ReviewBlock = styled.View`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  flex-direction: row;
  opacity: 0.7;
`;

const HistoryBlock = styled.View`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  flex-direction: row;
  border-radius: 4px;
  padding: 2px 8px;
  border: 1px solid ${({theme}) => theme.colors.content};
`;

const HistoryText = styled.Text`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.3px;
  margin-left: 2px;
  color: ${({theme}) => theme.colors.content};
`;

const Buttons = styled.View`
  display: flex;
  align-items: flex-start;
  align-content: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 24px;
  gap: 22px;
`;

const ButtonWrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 8px;
`;

const ButtonLabel = styled.Text`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.3px;
  color: ${({theme}) => theme.colors.content};
`;

const IconButton = styled.TouchableOpacity`
  border: 1px solid ${({theme}) => theme.colors.content};
  border-radius: 10px;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

const MoreButton = styled.TouchableOpacity`
  border-radius: 10px;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  border: none;
  background: ${({theme}) => theme.colors.background2};
`;

const AssetButton = styled.Pressable``;

function Index() {
  const theme = useTheme();
  const {onToggleShowAssets} = useWalletAction();
  return (
    <DashboardWrapper>
      <DashboardView>
        <Header>
          <ReviewBlock>
            <Label>Обзор активов</Label>
            <AssetButton onPress={onToggleShowAssets}>
              <EyeIcon color={theme.colors.content} />
            </AssetButton>
          </ReviewBlock>
          <HistoryBlock>
            <HistoryIcon color={theme.colors.content} />
            <HistoryText>История</HistoryText>
          </HistoryBlock>
        </Header>
        <Assets />
        <Buttons>
          <ButtonWrapper>
            <IconButton>
              <ArrowTwoIcon color={theme.colors.content} />
            </IconButton>
            <ButtonLabel>Пополнить</ButtonLabel>
          </ButtonWrapper>
          <ButtonWrapper>
            <IconButton>
              <ArrowOneIcon color={theme.colors.content} />
            </IconButton>
            <ButtonLabel>Вывод</ButtonLabel>
          </ButtonWrapper>
          <ButtonWrapper>
            <IconButton>
              <ArrowThirdIcon color={theme.colors.content} />
            </IconButton>
            <ButtonLabel>Cчет</ButtonLabel>
          </ButtonWrapper>
          <ButtonWrapper>
            <MoreButton>
              <ArrowRightIcon color={theme.colors.content} />
            </MoreButton>
            <ButtonLabel>Еще...</ButtonLabel>
          </ButtonWrapper>
        </Buttons>
      </DashboardView>
    </DashboardWrapper>
  );
}

export default Index;
