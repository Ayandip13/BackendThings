import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import COLOR from '../constants/COLOR.js';

const SafeScreen = ({ children }) => {
  const insects = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insects.top }]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default SafeScreen;
