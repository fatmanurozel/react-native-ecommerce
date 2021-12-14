import React from "react";
import Orders from "./src/OrdersList";
import Suppliers from "./src/SuppliersList";
import Products from "./src/ProductsList";
import Categories from "./src/CategoriesList";

import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Categories">
          <Tab.Screen name="Categories" component={Categories} />
          <Tab.Screen name="Products" component={Products} />
          <Tab.Screen name="Suppliers" component={Suppliers} />
          <Tab.Screen name="Orders" component={Orders} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
