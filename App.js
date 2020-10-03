import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,  View } from 'react-native';
import Checkout from './Checkout'

export default function App() {
  return (
    <View style={styles.container}>
      <Checkout/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8FF',
    flexDirection:"column"
  },
});
