import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, TextInput } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://northwind.vercel.app/api/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const searchProducts = (name) => {
    fetch('https://northwind.vercel.app/api/products')
      .then((res) => res.json())
      .then((data) => {
        let filteredProducts = data.filter((q) =>
          q.name.toLowerCase().includes(name.toLowerCase())
        );
        setProducts(filteredProducts);
      });
  };

  const renderItem = ({ item }) => (
    <Text style={{ padding: 20, backgroundColor: 'gray', margin: 3 }}>
      {item.name} 
    </Text>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={searchProducts}
        placeholder="Product Name" />

      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});

