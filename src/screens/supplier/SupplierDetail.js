import React from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-elements";

const SupplierDetail = ({ navigation, route }) => {
  const { supplierItem } = route.params;

  return (
    <Card>
      <Card.Title>{supplierItem?.companyName}</Card.Title>
      <Card.Divider />
      <View>
        <Text>ID: {supplierItem?.id}</Text>
        <Text>Contact Name: {supplierItem?.contactName}</Text>
        <Text>Contact Title: {supplierItem?.contactTitle}</Text>
        <Text>
          Address:{"  "}
          {`street: ${supplierItem?.address.street}  
                city: ${supplierItem?.address.city} 
                country: ${supplierItem?.address.country} 
                `}
        </Text>
      </View>
    </Card>
  );
};

export default SupplierDetail;
