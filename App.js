import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const App = () => {
  return (
    <View style={sheet.container}>
      { () => console.log("olá")() }
      <Text style={sheet.title}>Calcule seu IMC</Text>
      <TextInput style={sheet.input}/>
    </View>    
  );
}

const sheet = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    textAlign: 'center',
    marginTop: 25,
    fontSize: 30,
  },
  input: {
    backgroundColor: '#DDD',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: '#000',
    fontSize: 23,
  },
});

export default App;