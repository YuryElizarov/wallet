import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {useColorScheme} from 'react-native';
import {darkTheme, lightTheme, WalletTheme} from './src/theme';
import Screens from './src/screens';
import {store} from './src/store';
import {Provider} from 'react-redux';

declare module 'styled-components' {
  export interface DefaultTheme extends WalletTheme {}
}

function App(): JSX.Element {
  const scheme = useColorScheme();
  return (
    <Provider store={store}>
      <ThemeProvider theme={scheme === 'dark' ? darkTheme : lightTheme}>
        <Screens />
      </ThemeProvider>
    </Provider>
  );
}

// const styles = StyleSheet.create({});

export default App;
