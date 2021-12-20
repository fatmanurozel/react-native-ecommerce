import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Button, Card } from "react-native-elements";

const ProductList = ({ navigation }) => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://northwind.vercel.app/api/products/")
      .then((res) => res.json())
      .then((data) => {
        setProductList(data);
        setLoading(true);
      });
  }, [productList]);

  return (
    <>
      {loading == false ? (
        <View style={styles.Activity}>
          <ActivityIndicator size="large" color="#285abf" />
        </View>
      ) : (
        <ScrollView style={styles.container}>
          <View>
            <Button
              title="Add New Product"
              onPress={() => navigation.navigate("ProductForm")}
              style={styles.addButton}
            />
          </View>

          {productList &&
            productList.map((item, key) => (
              <Card key={key}>
                <View style={styles.card}>
                  <Card.Title style={styles.title}>{item.name}</Card.Title>
                  <Card.Divider />
                  <View>
                    <Button
                      title="detail page"
                      onPress={() =>
                        navigation.navigate("ProductDetail", {
                          productItem: item,
                        })
                      }
                      style={styles.button}
                    />
                  </View>
                </View>
              </Card>
            ))}
        </ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  Activity: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    height: 40,
    width: 300,
    margin: 12,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    height: 40,
    width: 150,
    margin: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addButton: {
    height: 40,
    width: 300,
    margin: 12,
    padding: 10,
  },
});

export default ProductList;
