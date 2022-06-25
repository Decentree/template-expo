import React from "react";
import { StatusBar } from "expo-status-bar";

import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./src/screens/RootStackParams";
import "react-native-gesture-handler";

import { HomeScreen, AboutScreen } from "./src/screens";

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  const navigationRef = useNavigationContainerRef();

  const screens: {
    name: keyof RootStackParamList;
    component: React.ReactNode;
  }[] = [
    { name: "Home", component: HomeScreen },
    { name: "About", component: AboutScreen },
  ];

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator screenOptions={{ headerShown: false, animationEnabled: true }}>
          {screens.map((it: any) => (
            <Stack.Screen key={it.name} {...it} />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
