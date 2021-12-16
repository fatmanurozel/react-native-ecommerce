import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList, TextInput } from "react-native";

export default function Order() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://northwind.vercel.app/api/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);

  const renderItem = ({ item }) => (
    <Text style={{ padding: 20, backgroundColor: "red", margin: 3 }}>
      {item.shipName}
    </Text>
  );

  return (
    <View>
      <FlatList
        data={orders}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}







        
      />
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
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
});
