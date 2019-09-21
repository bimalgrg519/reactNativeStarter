import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

const AuthLoadingScreen = ({navigation}) => {
  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token');
    navigation.navigate(token ? 'Main' : 'Auth');
  };

  useEffect(() => {
    checkToken();
  });

  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
};

export default AuthLoadingScreen;
