import React, {useMemo} from 'react';
import {TouchableOpacityProps} from 'react-native';
import styled, {useTheme} from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

type ButtonProps = TouchableOpacityProps & {text: string};

const Button = styled.TouchableOpacity`
  width: 100%;
  max-width: 245px;
  background-color: linear-gradient(91.43deg, #0427f0 -2.6%, #844ff5 109.21%);
`;

const LinearStyled = styled(LinearGradient)`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding: 16px 36px;
  border-radius: 8px;
  //overflow: hidden;
`;

const ButtonText = styled.Text`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.3px;
  color: white;
`;
function Index({text, ...props}: ButtonProps) {
  const theme = useTheme();
  const colors = useMemo(
    () =>
      props.disabled
        ? [theme.colors.placeholder, theme.colors.placeholder]
        : ['#0427f0', '#844ff5'],
    [props.disabled, theme],
  );
  return (
    <Button {...props}>
      <LinearStyled start={{x: 0, y: 0.5}} end={{x: 1, y: 0.5}} colors={colors}>
        <ButtonText>{text}</ButtonText>
      </LinearStyled>
    </Button>
  );
}

export default Index;
