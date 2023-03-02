import React from 'react';
import styled, {useTheme} from 'styled-components/native';
import {Platform} from 'react-native';
import TextInputMask from 'react-native-text-input-mask';
import Button from '../../components/Button';

const Header = styled.View`
  width: 100%;
  max-width: 245px;
  margin-top: ${Platform.OS === 'ios' ? 80 : 60}px;
`;

const Title = styled.Text`
  font-weight: 500;
  font-size: 24px;
  line-height: 31px;
  letter-spacing: -0.3px;
  color: ${({theme}) => theme.colors.content};
`;
const Subtitle = styled.Text`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${({theme}) => theme.colors.content};
  opacity: 0.5;
  margin-top: 3px;
`;

const InputView = styled.View`
  width: 100%;
  max-width: 245px;
  margin-top: 60px;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.colors.border};
  padding-bottom: 8px;
`;

const Input = styled(TextInputMask)`
  color: ${({theme}) => theme.colors.input};
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
`;

const ButtonStyled = styled(Button)`
  margin-top: 50px;
`;
function EnterNumberScreen({
  phone,
  onChange,
  onNext,
}: {
  phone: string;
  onChange: (val: string) => void;
  onNext: () => void;
}) {
  const theme = useTheme();
  return (
    <>
      <Header>
        <Title>
          Введите {'\n'}
          номер телефона
        </Title>
        <Subtitle>Чтобы войти или стать {'\n'}клиентом KASSA60</Subtitle>
      </Header>

      <InputView>
        <Input
          value={phone}
          autoFocus
          onChangeText={(formatted, extracted) => {
            // +1 (123) 456-78-90
            if (formatted) {
              onChange(formatted);
            }
            console.log(extracted); // 1234567890
          }}
          placeholderTextColor={theme.colors.input}
          placeholder={'+7'}
          keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
          // keyboardType={Platform.OS === 'ios' ? 'numeric' : 'number-pad'}
          mask={'+7 ([000]) [000]-[00]-[00]'}
        />
      </InputView>
      <ButtonStyled onPress={onNext} text={'Продолжить'} />
    </>
  );
}

export default EnterNumberScreen;
