import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';

import Colors from '../constants/colors';
import NumberComponent from '../components/NumberComponent';

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');

    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setConfirmed(false);
        setEnteredValue('');
        Keyboard.dismiss();
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number!', 'The value has to be a number between 1 and 99.', [{ text: 'Okay', style: 'destructive', onPress: () => resetInputHandler }])
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    };

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = (
        <Card style={styles.card}>
            <Text style={{ fontSize: 16, textAlign: 'center' }}>You selected</Text>
            <NumberComponent>
                { selectedNumber }
            </NumberComponent>
            <Button title="Start Game" onPress={ () => props.onStartGame(selectedNumber) }></Button>
        </Card>)
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Text style={styles.title}>Lista para entrenar</Text>
                <Card style={styles.inputContainer}>
                    <Text> Selecciona un Trampolin</Text>
                    <Input
                        style={styles.input}
                        autoCapitalize='none'
                        keyboardType="number-pad"
                        maxLength={2}
                        blurOnSubmit
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.btnContainer}>
                        <View style={styles.button}>
                            <Button
                                title="Reset"
                                onPress={resetInputHandler}
                                color={Colors.accent} />
                        </View>
                        <View style={styles.button}>
                            <Button
                                title="Confirm"
                                onPress={confirmInputHandler}
                                color={Colors.primary} />
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    btnContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    button: {
        width: 100,
    },
    input: {
        width: 40,
        textAlign: 'center'
    },
    card: {
        marginTop: 20,
        alignItems: 'center'
    }
});

export default StartGameScreen;