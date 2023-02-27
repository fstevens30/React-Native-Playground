import React from "react";
import {StyleSheet, View, Text, Button, ScrollView} from "react-native";

// Setting Up the main components

const Header = () => {
    return (
        <View>
        <Text style={styles.bigRed}>This is the header component!</Text>
        </View>
    );
    }

const Footer = () => {
    return (
        <View>
        <Text style={styles.bigBlue}>This is the footer component!</Text>
        </View>
    );
    }

const Content = () => {
    return (
        <View >
        <Text style={styles.content}>This is the content component!</Text>
        </View>
    );
    }

const AnotherButton = () => {
    return (
        <Button title="Click Me!" onPress={console.log("Button Clicked!")} style={styles.button} />
    );
    }


// Setting up the style sheet
    
const styles = StyleSheet.create({
    bigRed: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 10,
    },

    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
        display: 'flex',
        padding: 10,
        alignSelf: 'center',
    },

    button: {
      backgroundColor: 'yellow',
      color: 'white',
      padding: 10,
      fontSize: 20,
      textAlign: 'center',
      width: 250,
      height: 70,
      borderRadius: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      alignSelf: 'center',
    },

    container: {
        flex: 1,
        backgroundColor: '#ff0fff',
        flexDirection: 'column',
    },

    content: {
        backgroundColor: '#fff',
        color: '#000',
        padding: 10,
        fontSize: 40,
        textAlign: 'center',
        alignSelf: 'center',
        width: '100%',
        height: '100%',
    }


    });

    // Display components in the app

    export default function App() {
        return (
            <ScrollView style = {styles.container}>
                <Header/>
                <Content />
                <AnotherButton />
                <Footer />
            </ScrollView>
        );
    }