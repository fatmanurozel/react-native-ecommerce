import React from "react";
import { Button, Text } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../home/HomeScreen";
import Category from "../category/CategoriesList";
import Product from "../product/ProductsList";
import Order from "../order/OrdersList";
import Supplier from "../supplier/SuppliersList";

const Tab = createBottomTabNavigator();

const AppTabNavigator = ({ navigation }) => {
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
        component={Product}
        options={{
          tabBarLabel: "Ürünler",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="gift-outline" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={Order}
        options={{
          tabBarLabel: "Sepet",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Notification"
        component={Supplier}
        options={{
          tabBarLabel: "Bildirimler",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications-outline" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Profil"
        component={Category}
        options={{
          tabBarLabel: "Profil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppTabNavigator;
