import React from "react";
import HomeScreen from "./src/screens/home/HomeScreen";
import AppTabNavigator from "./src/screens/navigator/AppTabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProductDetail from "./src/screens/product/ProductDetail";
import ProductForm from "./src/screens/product/ProductForm";
import ProductList from "./src/screens/product/ProductList";

import SupplierList from "./src/screens/supplier/SupplierList";
import SupplierForm from "./src/screens/supplier/SupplierForm";
import SupplierDetail from "./src/screens/supplier/SupplierDetail";

import OrderList from "./src/screens/order/OrderList";

import CategoryDetail from "./src/screens/category/CategoryDetail";
import CategoryList from "./src/screens/category/CategoryList";
import CategoryForm from "./src/screens/category/CategoryForm";

import { ProductProvider } from "./src/context/ProductContext";
import { SupplierProvider } from "./src/context/SupplierContext";
import { CategoryProvider } from "./src/context/CategoryContext";
import OrderDetail from "./src/screens/order/OrderDetail";

import { OrderProvider } from "./src/context/OrderContext";
import OrderForm from "./src/screens/order/OrderForm";


const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <CategoryProvider>
        <ProductProvider>
          <OrderProvider>
          <SupplierProvider>
            <NavigationContainer>
              <Stack.Navigator initialRouteName="AppTabNavigator">
                <Stack.Screen
                  name="AppTabNavigator"
                  component={AppTabNavigator}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Home"
                  component={HomeScreen}
                  options={{ title: "Home Screen" }}
                />
                <Stack.Screen name="ProductList" component={ProductList} />
                <Stack.Screen name="ProductDetail" component={ProductDetail} />
                <Stack.Screen
                  name="ProductForm"
                  component={ProductForm}
                  options={{ title: "add new product" }}
                />

                <Stack.Screen name="SupplierList" component={SupplierList} />
                <Stack.Screen
                  name="SupplierDetail"
                  component={SupplierDetail}
                />
                <Stack.Screen
                  name="SupplierForm"
                  component={SupplierForm}
                  options={{ title: "add new supplier" }}
                />

                <Stack.Screen name="OrderList" component={OrderList} />
                <Stack.Screen name="OrderDetail" component={OrderDetail} />
                <Stack.Screen
                  name="OrderForm"
                  component={OrderForm}
                  options={{ title: "add new order" }}
                />

                <Stack.Screen name="CategoryList" component={CategoryList} />
                <Stack.Screen
                  name="CategoryDetail"
                  component={CategoryDetail}
                />
                <Stack.Screen
                  name="CategoryForm"
                  component={CategoryForm}
                  options={{ title: "add new category" }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </SupplierProvider>
          </OrderProvider>
        </ProductProvider>
      </CategoryProvider>
    </>
  );
}

export default App;
