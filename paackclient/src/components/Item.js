/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Item = ({id, customer}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{id}</Text>
    <Text style={styles.title}>{customer}</Text>
  </View>
);

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#4ECFD3',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 26,
  },
});

export default Item;
