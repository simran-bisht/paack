/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

function DeliveryDetails({route, navigation}) {
  const makeActiveStatus = useSelector(state => state.makeActive);
  const makeActiveID = useSelector(state => state.id);

  const dispatch = useDispatch();

  const finishDelivery = async (item, status) => {
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        deliveryId: item.deliveryId,
        status: status,
        latitude: item.latitude,
        longitude: item.longitude,
      }),
    };
    const resp = await fetch(
      'https://60e84194673e350017c21844.mockapi.io/api/finishDelivery',
      requestOptions,
    );
    const data = await resp.json();
    dispatch({type: 'DISABLE_ACTIVE'});
    
  };

  const {item} = route.params;

  const clickMakeActive = item => {
    if (!makeActiveStatus) {
      dispatch({type: 'ENABLE_ACTIVE', payload: item.id});
    } else {
      alert('Pending Delivery ID = ' + makeActiveID);
    }
  };
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{item.id}</Text>
      <Text style={styles.title}>{item.customer}</Text>
      <Text style={styles.title}>{item.address}</Text>
      <Text style={styles.title}>{item.city}</Text>
      <Text style={styles.title}>{item.customer}</Text>

      <Button
        style={styles.button}
        title="Make Active"
        onPress={() => {
          clickMakeActive(item);
        }}
      />

      {makeActiveID && makeActiveID == item.id && (
        <View>
          <Button
            style={styles.button}
            title="Delivered"
            onPress={() => {
              finishDelivery(item, 'delivered');
            }}
          />

          <Button
            style={styles.button}
            title="Un Delivered"
            onPress={() => {
              finishDelivery(item, 'undelivered');
            }}
          />
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  item: {
    backgroundColor: '#4ECFD3',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
  button: {
    margin: 5,
  },
});

export default DeliveryDetails;
