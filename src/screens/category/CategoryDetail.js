import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import { PricingCard } from "react-native-elements/dist/pricing/PricingCard";

const ProductDetail = ({ navigation, route }) => {
  const { categoryItem } = route.params;

  return (
    <>
      <Text>{categoryItem.name}</Text>
    </>
  );
};

export default ProductDetail;
