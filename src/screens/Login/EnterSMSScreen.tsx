import React, {useCallback, useEffect, useState} from 'react';
import styled, {useTheme} from 'styled-components/native';
import {Platform} from 'react-native';
import Button from '../../components/Button';
import Topbar from '../../components/Topbar';
import {useTimer} from 'react-timer-hook';
import {addZeroForward} from '../../utils';
import {useUserAction} from '../../store/user/hooks';

const Header = styled.View`
  width: 100%;
  max-width: 245px;
  margin-top: 70px;
`;

const Subtitle = styled.Text`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${({theme}) => theme.colors.content};
  margin-top: 3px;
  text-align: center;
`;

const InputView = styled.View`
  width: 100%;
  max-width: 97px;
  margin-top: 50px;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.colors.border};
  padding-bottom: 8px;
`;

const Input = styled.TextInput`
  color: ${({theme}) => theme.colors.input};
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
`;

const ButtonStyled = styled(Button)`
  margin-top: 50px;
`;
function EnterSMSScreen({phone, onPrev}: {phone: string; onPrev: () => void}) {
  const [sms, setSms] = useState<string>('');
  const [time, setTime] = useState<Date>(new Date());
  const [isTimerFinished, setIsTimerFinished] = useState<boolean>(false);
  const theme = useTheme();

  const {onLogin} = useUserAction();

  const onRestart = useCallback(() => {
    const date = new Date();
    date.setMinutes(date.getMinutes() + 1);
    setTime(date);
    setIsTimerFinished(false);
  }, []);
  useEffect(() => {
    onRestart();
  }, [onRestart]);

  const {seconds, minutes, restart} = useTimer({
    expiryTimestamp: time,
    autoStart: true,
    onExpire: () => setIsTimerFinished(true),
  });

  useEffect(() => {
    restart(time, true);
  }, [time]);

  const onChangeSms = (val: string) => {
    if (val.length <= 4) {
      setSms(val);
    }
  };

  useEffect(() => {
    if (sms.length >= 4) {
      console.log('login');
      onLogin();
    }
  }, [onLogin, sms]);

  return (
    <>
      <Topbar onPrev={onPrev} title={'Подтверждение'} isShowToggle={false} />
      <Header>
        <Subtitle>
          Код отправлен на номер {'\n'} {phone}
        </Subtitle>
      </Header>

      <InputView>
        <Input
          value={sms}
          onChangeText={onChangeSms}
          placeholderTextColor={theme.colors.placeholder}
          placeholder={'СМС-код'}
          keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
        />
      </InputView>
      <ButtonStyled
        disabled={!isTimerFinished}
        onPress={onRestart}
        text={
          isTimerFinished
            ? 'Запросить код еще раз'
            : `Запросить через  ${addZeroForward(
                minutes.toString(),
              )}:${addZeroForward(seconds.toString())}`
        }
      />
    </>
  );
}

export default EnterSMSScreen;
