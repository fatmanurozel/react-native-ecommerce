import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList, TextInput } from "react-native";
import Constants from "expo-constants";

export default function CategoriesList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://northwind.vercel.app/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  const renderItem = ({ item }) => (
    <Text style={{ padding: 20, backgroundColor: "gray", margin: 3 }}>
      {item.name}
    </Text>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
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
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
});
