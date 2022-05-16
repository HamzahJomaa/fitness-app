import React from 'react';
import Routes from './src/Routes';

import { Provider } from 'react-redux';
import loadStore from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
const { store, persistor } = loadStore();
import { ThemeProvider, createTheme } from '@rneui/themed';

const theme = createTheme({
  
});

const MainApplication = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
        <Routes />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};
export default MainApplication;