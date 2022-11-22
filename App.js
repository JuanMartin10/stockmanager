import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

import { StoresProvider } from './src/StoresContext';
import { useDarkTheme } from './src/hooks/useDarkTheme';
import Navigation from './src/navigation';

const App = () => {
  const { theme } = useDarkTheme();

  return (
    <PaperProvider theme={theme}>
      <StoresProvider>
        <Navigation />
      </StoresProvider>
    </PaperProvider>
  );
};

export default App;
