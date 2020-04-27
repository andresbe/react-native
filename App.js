import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Button, FlatList } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
export default function App() {

  return (
    <View style={styles.container}>
      <Header title="My App" />
      <StartGameScreen ></StartGameScreen>
    </View>
  );
}

const styles  = StyleSheet.create({
  container: {
    flex: 1
  }
})
