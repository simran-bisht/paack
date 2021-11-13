/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DeliveryList from '../components/DeliveryList';
import DeliveryDetails from '../components/DeliveryDetails';

const Stack = createStackNavigator();

function DeliveryStack() {
  return (
    <Stack.Navigator initialRouteName="DeliveryList">
      <Stack.Screen
        name="DeliveryList"
        component={DeliveryList}
        options={{title: 'Delivery List'}}
      />
      <Stack.Screen
        name="DeliveryDetails"
        component={DeliveryDetails}
        options={{title: 'Delivery Details'}}
      />
    </Stack.Navigator>
  );
}

export default DeliveryStack;
