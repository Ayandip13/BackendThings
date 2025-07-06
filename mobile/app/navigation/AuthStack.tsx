import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/SignIn';
import SignupScreen from '../screens/auth/Signup';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeScreen from '../components/SafeScreen';
import { StatusBar } from 'react-native';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <SafeAreaProvider>
      <SafeScreen>
        <Stack.Navigator
          screenOptions={{
            animation: 'fade_from_bottom',
            statusBarAnimation: 'fade',
            animationDuration: 1000,
            headerShown: false,
            contentStyle: {
              alignItems: 'center',
            },
            headerStyle: {
              backgroundColor: 'gray',
            },
          }}
        >
          <Stack.Screen
            name="Signup"
            options={{ headerTitleAlign: 'center' }}
            component={SignupScreen}
          />
          <Stack.Screen name="Signin" component={LoginScreen} />
        </Stack.Navigator>
      </SafeScreen>
      <StatusBar barStyle={'dark-content'} />
    </SafeAreaProvider>
  );
}
