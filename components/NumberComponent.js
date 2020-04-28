import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Colors from '../constants/colors';

const NumberComponent = props => {
    return (
        <View style={{ ...styles.container, ...props.style}}>
            <Text style={ styles.number }> {props.children} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: Colors.secondary,
        marginVertical: 12,
        padding: 5,
        borderRadius: 12,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    number: {
        fontSize: 22,
        color: Colors.primary
    }
});

export default NumberComponent;