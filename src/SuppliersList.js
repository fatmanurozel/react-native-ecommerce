import React, { useState, useEffect } from 'react';
import { Text, View, FlatList} from 'react-native';

export default function Suppliers() {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    fetch('https://northwind.vercel.app/api/suppliers')
      .then((res) => res.json())
      .then((data) => {
        setSuppliers(data);
      });
  }, []);

  const renderItem = ({ item }) => (
    <Text>
      {item.companyName} 
    </Text>
  );

  return (
    <View>
      <FlatList
        data={suppliers}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}></FlatList>
    </View>
  );
}
