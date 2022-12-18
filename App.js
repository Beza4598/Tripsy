import { useFonts
 } from "expo-font";
import Login  from "./screens/Login";
import Home from "./screens/Home";
import Vote from "./screens/Vote";
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from "react-native";
import CreateGroup from "./screens/Patrick/CreateGroup"
import DetailedDashboard from "./screens/Patrick/DetailedDashboard"
import React, {useState} from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

// const Stack = createStackNavigator();
const homeName = 'Home'
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;
          if (rn === homeName){
              iconName = focused ? 'home' : 'home-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    >
      <Tab.Screen name="Home" component={Home} options={{headerShown:false, tabBarShowLabel:false}}/>
    </Tab.Navigator>
  );
}

const App = () => {

  const Stack = createNativeStackNavigator();

  const [loaded] = useFonts({
    InterBold : require("./assets/fonts/Inter-Bold.ttf"),  
    InterSemiBold : require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium : require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular : require("./assets/fonts/Inter-Regular.ttf")

  });

  if (!loaded) {
    return <Text>Loading</Text>;
  }

  return (

    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>

      <NavigationContainer>
        <Stack.Navigator style={styles.container}>
            <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown:false}}
            />
          <Stack.Screen
              name="GroupDashboard"
              component={DetailedDashboard}
              options={{headerShown:false}}
            />

        </Stack.Navigator>
        </NavigationContainer>

      // <View style={styles.container}>
      //   <Vote/>
      // </View>

  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      margin: 'auto',
      alignItems: 'center'
    },
  });

  


export default App;