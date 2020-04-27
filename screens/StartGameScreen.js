import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import Header from '../components/Header';

const StartGameScreen = props => {
    return (
        <View style={ styles.screen }>
            <Text style={ styles.title }>Lista para entrenar</Text>
            <View style={ styles.inputContainer }>
                <Text> Selecciona un Trampolin</Text>
                <TextInput />
                <View style={styles.btnContainer}>
                    <Button title="Reset" onPress={ () => {} }/>
                    <Button title="Confirm" onPress={ () => {} } />
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    screen: { flex: 1, padding: 10, alignItems: 'center' },
    title: {fontSize: 20, marginVertical: 10, },
    inputContainer: { width: 300, maxWidth: '80%', alignItems: 'center', shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowRadius: 6, shadowOpacity: 0.26, backgroundColor: 'white' },
    btnContainer: { flexDirection: 'row', width: '100%', justifyContent: 'space-between' }
});

export default StartGameScreen;