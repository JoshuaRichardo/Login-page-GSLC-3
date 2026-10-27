// @ts-ignore: File CSS ini diproses oleh Metro Bundler untuk NativeWind
import "./global.css";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/screens/LoginScreen';
import DashboardScreen from './src/screens/DashboardScreen';
// 1. Impor RegisterScreen yang baru dibuat
import RegisterScreen from './src/screens/RegisterScreen';

// 2. Tambahkan 'Register' ke dalam RootStackParamList
export type RootStackParamList = {
  Login: undefined;
  Dashboard: undefined;
  Register: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Dashboard" 
          component={DashboardScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}