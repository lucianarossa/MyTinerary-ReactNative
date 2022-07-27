import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import HomeStyles from "../styles/HomeStyles"
import { Image } from "react-native"
import StackNavigation from "../navigation/StackNavigation"
import CitiesScreen from '../screens/CitiesScreen';


const Tab = createBottomTabNavigator();

export default function BottonTabs() {
  return (

    <Tab.Navigator initialRouteName="HOME"
      screenOptions={{
        tabBarStyle: { height: 90, paddingBottom: 10, },
        tabBarActiveTintColor: "#95ACA8",
        tabBarInactiveTintColor: "black",
        tabBarLabelStyle: {
          fontSize: 15,
          fontFamily: "PaytoneOne_400Regular"
        }
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: () => {
            return (
              <Image
                style={HomeStyles.LogoTabs}
                source={require("../assets/logo2.png")}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Cities"
        component={StackNavigation}
        options={{
          headerShown: false,
          title: 'Cities',
          tabBarIcon: () => {
            return (
              <Image
                style={HomeStyles.LogoTabs}
                source={require("../assets/cities.png")}
              />
            );
          },
        }}
      />
    </Tab.Navigator>

  );
}