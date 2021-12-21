import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";

import Swiper from "react-native-swiper/src";

function HomeScreen() {
  return (
    <View>
      {" "}
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Product</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Order</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>Supplier</Text>
        </View>
        <View style={styles.slide4}>
          <Text style={styles.text}>Category</Text>
        </View>
      </Swiper>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFC79A",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFAEFA",
  },
  slide4: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#A09AFF",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});
