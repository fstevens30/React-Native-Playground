import React from 'react';
import {Text, View} from 'react-native';

// Setting a const to a function that returns a component, this is a cat component
const Cat = () => {
    return (
        <View>
        <Text>Hello, I am your cat!</Text>
        </View>
    );
    }

const Dog = () => {
    return (
        <View>
        <Text>Hello, I am your dog!</Text>
        </View>
    );
    }

    
// This is a component that returns some cats and dogs

const Test = () => {
    return (
        <View>
        <Text>Here is 3 cats and 2 dogs!</Text>
        <Cat />
        <Cat />
        <Cat />
        <Dog />
        <Dog />
        </View>
    );
    }

export default Test;