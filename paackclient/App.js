import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import DeliveryStack from './src/navigation/DeliveryStack';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DeliveryStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
