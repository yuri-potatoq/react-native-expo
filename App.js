import styled from 'styled-components/native';
import React, { useState } from 'react';
import { Text, View } from 'react-native';

const Pagina = styled.SafeAreView`
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
      <Entrada/>
      <Text>Nome: {nome}</Text>
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