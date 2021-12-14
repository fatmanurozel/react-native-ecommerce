import React from "react";

import HomeScreen from "./src/screens/home/HomeScreen";
import AppTabNavigator from "./src/screens/navigayor/AppTabNavigator";
import CategoryDetail from "./src/screens/category/CategoryDetail";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
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
          <Stack.Screen name="CategoryDetail" component={CategoryDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
