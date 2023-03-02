import React from 'react';
import styled, {useTheme} from 'styled-components/native';
import {Platform} from 'react-native';
import {ArrowLeftIcon, MenuIcon} from '../Svgs';

const BarView = styled.View`
  width: 100%;
  height: 24px;
  margin-top: ${Platform.OS === 'ios' ? 60 : 40}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LeftButton = styled.TouchableOpacity`
  align-items: center;
  padding-left: 20px;
`;

const RightButton = styled.TouchableOpacity`
  align-items: center;
  padding-right: 20px;
`;

const Title = styled.Text`
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  letter-spacing: -0.3px;
  color: ${({theme}) => theme.colors.content};
`;

const EmptyView = styled.View`
  width: 24px;
  height: 24px;
`;

function Index({
  title,
  onPrev,
  isShowToggle = true,
  isShowPrev = true,
}: {
  title: string;
  isShowToggle?: boolean;
  isShowPrev?: boolean;
  onPrev?: () => void;
}) {
  const theme = useTheme();
  return (
    <BarView>
      {isShowPrev ? (
        <LeftButton onPress={onPrev}>
          <ArrowLeftIcon color={theme.colors.content} />
        </LeftButton>
      ) : (
        <EmptyView style={{paddingLeft: 20}} />
      )}
      <Title>{title}</Title>
      {isShowToggle ? (
        <RightButton>
          <MenuIcon color={theme.colors.content} />
        </RightButton>
      ) : (
        <EmptyView style={{paddingRight: 20}} />
      )}
    </BarView>
  );
}

export default Index;
