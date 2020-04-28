import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Button, FlatList } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [ userNumber, setUserNumber ] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />

  if( userNumber ) {
    content = <GameScreen userChoice={userNumber} />
  }

  return (
    <View style={styles.container}>
      <Header title="My App" />
      { content }
    </View>
  );
}

const styles  = StyleSheet.create({
  container: {
    flex: 1
  }
})
