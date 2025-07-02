import React, { useState } from 'react';
import AuthStack from './AuthStack';
import BottomTabs from './BootomTab';

export default function RootNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // later replace with context/auth state

  return isLoggedIn ? <BottomTabs /> : <AuthStack />;
}
