import React, { useState, useEffect } from "react";
import { Button, Card } from "react-native-elements";

import {
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Alert,
} from "react-native";

import { ListItem, Icon } from "react-native-elements";

export default function CategoryList({ navigation }) {
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

  const categoryDelete = (id) => {
    fetch("https://northwind.vercel.app/api/categories/" + id, {
      method: "DELETE",
    })
      .then((res) => res.text())
      .then((data) => {
        setCategories(categories.filter((category) => category.id !== id));
      });
  };

  return (
    <>
      <View>
        <Button
          title="Add New Category"
          onPress={() => navigation.navigate("CategoryForm")}
        />
      </View>
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
                  <Button
                    title="Delete Category"
                    buttonStyle={{ backgroundColor: "rgba(214, 61, 57, 1)" }}
                    containerStyle={{
                      height: 40,
                      width: 200,
                      marginHorizontal: 50,
                      marginVertical: 10,
                    }}
                    titleStyle={{ color: "white", marginHorizontal: 20 }}
                    onPress={() => categoryDelete(item.id)}
                  />
                </ListItem>
              </TouchableOpacity>
            ))}
        </ScrollView>
      )}
    </>
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
