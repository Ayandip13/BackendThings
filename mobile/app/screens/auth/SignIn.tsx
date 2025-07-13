import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import styles from '../../../assets/styles/login.styles';

const Signin = () => {
  // const [email, setEmail] = useState<string>('');
  // const [password, setPassword] = useState<string>('');
  // const [showPassword, setShowPassword] = useState<boolean>(false);
  // const [loading, setIsLoading] = useState<boolean>(false);

  // const handleLogin = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.topIllustration}>
        <Image
          source={require('../../../assets/images/download.jpeg')}
          style={styles.illustrationImage}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default Signin;
