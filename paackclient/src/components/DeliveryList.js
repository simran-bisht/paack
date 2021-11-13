/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet, Pressable} from 'react-native';
import Item from './Item';

function DeliveryList({navigation}) {
  useEffect(() => {
    fetchData();
  }, []);

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const resp = await fetch(
      'https://60e84194673e350017c21844.mockapi.io/api/deliveries',
    );
    const data = await resp.json();

    setData(data);
  };

  const renderItem = ({item}) => {
    return (
      <>
        <Pressable
          onPress={() => navigation.navigate('DeliveryDetails', {item})}>
          <Item id={item.id} customer={item.customer} />
        </Pressable>
      </>
    );
  };
  return (
    <View style={styles.content}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 8,
  },
});

export default DeliveryList;
