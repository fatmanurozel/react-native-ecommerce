import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList, TextInput } from "react-native";

export default function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://northwind.vercel.app/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const renderItem = ({ item }) => (
    <Text style={{ padding: 20, backgroundColor: "orange", margin: 3 }}>
      {item.name}
    </Text>
  );

  return (
    <View>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      ></FlatList>
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
});
