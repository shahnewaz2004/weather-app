import {
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";

import { Overpass_400Regular, Overpass_500Medium } from "@expo-google-fonts/overpass";

// IMPORT ALL THE SCREENS HERE
import Home from "./App/screens/Home";
import Details from "./App/screens/Details";
import Splash from "./App/screens/Splash";


const App = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#f5f6fa",
    },
  };

  const Stack = createNativeStackNavigator();

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Overpass_400Regular,
    Overpass_500Medium
  });

  if (!fontsLoaded) {
    return <ActivityIndicator style={{display: 'flex', alignSelf: 'center'}} />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator initialRouteName="Single">
          <Stack.Screen
            options={{ headerShown: false }}
            name="Splash"
            component={Splash}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            options={{
              headerTitleStyle: {
                fontFamily: "Poppins_500Medium",
              },
              headerShown: true,
              headerTitleAlign: "center",
            }}
            name="Details"
            component={Details}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
