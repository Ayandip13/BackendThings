import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from "./AuthStack";
import TabNavigator from "./TabNavigator";
// import { useAuthStore } from "../store/authStore";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  // const { checkAuth, user, token } = useAuthStore();

  // useEffect(() => {
  //   checkAuth(); // On app load
  // }, []);

  // const isSignedIn = user && token;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* {isSignedIn ? (
        <Stack.Screen name="Tabs" component={TabNavigator} />
        ) : (
          <Stack.Screen name="Auth" component={AuthStack} />
          )} */}
      <Stack.Screen name="Tabs" component={TabNavigator} />
      <Stack.Screen name="Auth" component={AuthStack} />
    </Stack.Navigator>
  );
}
