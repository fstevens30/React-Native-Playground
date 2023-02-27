import React from "react";
import {View, Text, Button} from "react-native";

// Setting Up the main components

const header = () => {
    return (
        <View>
        <Text>This is the header component!</Text>
        </View>
    );
    }

const footer = () => {
    return (
        <View>
        <Text>This is the footer component!</Text>
        </View>
    );
    }

const content = () => {
    return (
        <View>
        <Text>This is the content component!</Text>
        </View>
    );
    }

const button = () => {
    return (
        <View>
        <Button title="Click Me!" />
        </View>
    );
    }
    

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    header: {
        backgroundColor: '#darkblue',
        color: '#fff',
        padding: 10,
        fontSize: 20,
        textAlign: 'center',
    },

    footer: {
        backgroundColor: '#darkblue',
        color: '#fff',
        padding: 10,
        fontSize: 20,
        textAlign: 'center',
    },

    button: {
        backgroundColor: '#darkred',
        color: '#fff',
        padding: 10,
        fontSize: 20,
        textAlign: 'center',
    },

    });
