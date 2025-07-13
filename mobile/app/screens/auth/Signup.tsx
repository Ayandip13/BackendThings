import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Signin from './Signin';

const Signup = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text style={{ textAlign: 'center' }}>Signup</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Signin')}
        style={{
          marginTop: 100,
          backgroundColor: 'blue',
          alignItems: 'center',
          // padding:10,
          justifyContent: 'center',
          paddingHorizontal: '3%',
          paddingVertical: '3%',
          borderRadius: 50,
        }}
      >
        <Text style={{ color: '#fff' }}>Click to go onto the next screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup;
