import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  state = {
    value: 0,
    totalTaps: 0
  }

  increment = () => {
    this.setState({
      value: this.state.value + 1,
      totalTaps: this.state.totalTaps + 1
    })
    console.log("Value: " + (this.state.value + 1))
  }

  decrement = () => {
    this.setState({
      value: this.state.value - 1,
      totalTaps: this.state.totalTaps + 1
    })
    console.log("Value: " + (this.state.value - 1))
  }

  render() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 75, marginBottom: -20}} >{this.state.value}</Text>
      <Text style={{fontSize: 20, padding: 20}} >{this.state.totalTaps}</Text>
      <StatusBar style="auto" />
      <View style={{flexDirection: 'row'}}>
        <Button title="Decrease" onPress={this.decrement} />
        <Text>   </Text>
        <Button title="Increase" onPress={this.increment} />
        </View>
      <View style={{flexDirection: 'row'}}>
        <Button title="Reset" onPress={() => this.setState({value: 0, totalTaps: 0})} />
        </View>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
