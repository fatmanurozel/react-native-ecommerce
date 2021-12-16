import React, { useContext } from "react";
import { Button, Text } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../home/HomeScreen";
import ProductList from "../product/ProductList";
import CategoryList from "../category/CategoryList";
import SupplierList from "../supplier/SupplierList";
import OrderList from "../order/OrderList";
import ProductContext from "../../context/ProductContext";
import SupplierContext from "../../context/ProductContext";
const Tab = createBottomTabNavigator();

const AppTabNavigator = ({ navigation }) => {
  const { addedProduct } = useContext(ProductContext);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Anasayfa",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Product"
        component={ProductList}
        options={{
          tabBarLabel: "Product",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="briefcase-outline" color={color} size={size} />
          ),
          tabBarBadge: addedProduct,
        }}
      />

      <Tab.Screen
        name="Order"
        component={OrderList}
        options={{
          tabBarLabel: "Order",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="pricetags-outline" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Supplier"
        component={SupplierList}
        options={{
          tabBarLabel: "Supplier",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="archive-outline" color={color} size={size} />
          ),
          tabBarBadge: addedSupplier,
        }}
      />

      <Tab.Screen
        name="Category"
        component={CategoryList}
        options={{
          tabBarLabel: "Category",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="reorder-four-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppTabNavigator;
