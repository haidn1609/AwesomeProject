import React, { useState } from "react";
import HomeScreen from "./src/Screen/HomeScreen";
import ScannerScreen from "./src/Screen/ScannerScreen";
import { NavigationContainer } from "@react-navigation/native/";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import { LogBox } from "react-native";
import ScanTextScreen from "./src/Screen/ScanTextScreen";
import OpenCamera from "./src/Screen/OpenCamera";

const Stact = createStackNavigator();

function App() {
  //LogBox.ignoreAllLogs();
  return (
    <Stact.Navigator initialRouteName="Home">
      <Stact.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: null }}
      />
      <Stact.Screen name="Scanner" component={ScannerScreen} />
      <Stact.Screen name="ScannerText" component={ScanTextScreen} />
      <Stact.Screen name="OpenCamera" component={OpenCamera} />
    </Stact.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
