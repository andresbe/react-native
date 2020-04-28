import React from 'react'
import { View, Style, Text, StyleSheet } from 'react-native'
import Colors from '../constants/colors';

const Header = props => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>{ props.title } </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: Colors.primary,
        height: 100,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 36
    },
    headerTitle: {
        fontSize: 18,
        color: '#FFFFFF'
    }
});

export default Header;