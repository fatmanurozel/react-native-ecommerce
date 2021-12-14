import React, { useState, useEffect } from "react";

import {
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";

import { ListItem, Icon } from "react-native-elements";

export default function CategoriesList({ navigation }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://northwind.vercel.app/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      });
  }, []);

  return (
    <View>
      {loading == true ? (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="small" color="#0000ff" />
        </View>
      ) : (
        <ScrollView>
          {categories &&
            categories.map((item, i) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("CategoryDetail", {
                    categoryItem: item,
                  })
                }
              >
                <ListItem key={i} bottomDivider>
                  <Icon name={item.icon} />
                  <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
              </TouchableOpacity>
            ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
