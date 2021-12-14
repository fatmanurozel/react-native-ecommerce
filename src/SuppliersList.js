import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList, TextInput } from "react-native";

export default function Suppliers() {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    fetch("https://northwind.vercel.app/api/suppliers")
      .then((res) => res.json())
      .then((data) => {
        setSuppliers(data);
      });
  }, []);

  const renderItem = ({ item }) => (
    <Text
      style={{
        padding: 20,
        backgroundColor: "black",
        color: "white",
        margin: 3,
      }}
    >
      {item.companyName}
    </Text>
  );

  return (
    <View>
      <FlatList
        data={suppliers}
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
