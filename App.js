import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./src/screens/Home";
import SecondScreen from "./src/screens/SecondScreen";
import ThirdScreen from "./src/screens/ThirdScreen";
import ForthScreen from "./src/screens/ForthScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="one"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="two"
          component={SecondScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="three"
          component={ThirdScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
