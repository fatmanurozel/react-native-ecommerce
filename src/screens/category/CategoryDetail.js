import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-elements";

const CategoryDetail = ({ navigation, route }) => {
  const { categoryItem } = route.params;

  return (
    <Card>
      <Card.Title>{categoryItem.name}</Card.Title>
      <Card.Divider />
      <View style={styles.cardContent}>
        <Text>
          <span style={{ fontWeight: "700" }}>ID: </span> {categoryItem?.id}
        </Text>
        <Text>
          <span style={{ fontWeight: "700" }}>Description: </span>
          {categoryItem?.description}
        </Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContent: {
    alignItems: "left",
  },
});

export default CategoryDetail;
