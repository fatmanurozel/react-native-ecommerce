import React, { useState, useEffect } from 'react';
import { Text, View, FlatList} from 'react-native';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('https://northwind.vercel.app/api/orders')
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);

  const renderItem = ({ item }) => (
    <Text>
      {item.shipName} 
    </Text>
  );

  return (
    <View>
      <FlatList
        data={orders}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}></FlatList>
    </View>
  );
}