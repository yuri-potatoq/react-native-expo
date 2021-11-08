import styled from 'styled-components/native';
import React, { useState } from 'react';
import { Text, View } from 'react-native';

const Pagina = styled.SafeAreaView`
  flex: 1;
  jsutify-content: center;
  align-items: center;
`;

const Entrada = styled.TextInput`
  width: 200p;
  height: 40px;
  border: 1px solid #000;
`;

const Hello = () => {
  const [name, setName] = useState('TADS UEPA');

  return (
    <View>
      <Entrada value={name} onChangeText={ text => setName(text) } />
      <Text>Nome: {name}</Text>
    </View>
  );
};

const App = () => {
  return (
    <Pagina>
      <Hello></Hello>
    </Pagina>
  );
}


export default App;