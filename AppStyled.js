import React from "react";
import styled from "styled-components/native";


const Texto = styled.Text`
  color: ${props => props.cor};
  font-size: 30px;
  background-color: green;
`;

const Pagina = styled.View`
  background-color: #0000FF;
  flex: 1;
`;

const App = () => {
  return (   
    <Pagina>
      <Texto cor="red">Texto de exemplo</Texto>
      <Texto cor="#FFFFF">Arruma ai Matsu</Texto>
    </Pagina>
  );
}

export default App;