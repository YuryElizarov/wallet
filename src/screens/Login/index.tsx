import React, {useState} from 'react';
import EnterNumberScreen from './EnterNumberScreen';
import styled from 'styled-components/native';
import EnterSMSScreen from './EnterSMSScreen';

const LoginView = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  height: 100%;
  justify-content: flex-start;
`;

enum ELoginStep {
  PhoneNumber,
  SMS,
}
function Index() {
  const [phone, setPhone] = useState<string>('');
  const [currentStep, setCurrentStep] = useState<ELoginStep>(
    ELoginStep.PhoneNumber,
  );
  return (
    <LoginView>
      {currentStep === ELoginStep.PhoneNumber && (
        <EnterNumberScreen
          onNext={() => setCurrentStep(ELoginStep.SMS)}
          phone={phone}
          onChange={setPhone}
        />
      )}
      {currentStep === ELoginStep.SMS && (
        <EnterSMSScreen
          onPrev={() => setCurrentStep(ELoginStep.PhoneNumber)}
          phone={phone}
        />
      )}
    </LoginView>
  );
}

export default Index;
