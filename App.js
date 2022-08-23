import React, { useState } from "react";
import HomeScreen from "./src/Screen/HomeScreen";
import ScannerScreen from "./src/Screen/ScannerScreen";
import { NavigationContainer } from "@react-navigation/native/";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from "@react-navigation/stack";

const Stact = createStackNavigator();

function App() {
  return (
    <Stact.Navigator initialRouteName="Home">
      <Stact.Screen name="Home" component={HomeScreen} options= {{headerShown: null}}/>
      <Stact.Screen name="Scanner" component={ScannerScreen}/>
    </Stact.Navigator>
  );
}

export default ()=>{
  return(
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}
