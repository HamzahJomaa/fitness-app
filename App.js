import React from 'react';
import Routes from './src/Routes';

import { Provider } from 'react-redux';
import loadStore from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
const { store, persistor } = loadStore();

const MainApplication = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
};
export default MainApplication;