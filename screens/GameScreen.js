import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

import NumberComponent from '../components/NumberComponent';
import Card from '../components/Card';


const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    const rndNumber = Math.floor(Math.random() * (max - min)) + min;

    return (rndNumber !== exclude) ? rndNumber : generateRandomBetween(min, max, exclude);
}

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice));

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < props.userChoice ) || (direction === 'greater' && currentGuess > props.userChoice )) {
            Alert.alert('Don\'t lie!', 'You know that this is wrong...', [{ text: 'Sorry!', style: 'cancel'}])
        }
    }

    return (
        <View style={styles.screen}>
            <Text>Oponent's Guess</Text>
            <NumberComponent>{currentGuess}</NumberComponent>
            <Card style={styles.buttonContainer}>
                <Button title="Lower" onPress={nextGuessHandler.bind(this, 'lower')}></Button>
                <Button title="Greater" onPress={nextGuessHandler.bind(this, 'greater')}></Button>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
});

export default GameScreen