import React, {useState} from "react";
import styled from "styled-components/native";


const Quadrado = styled.View`
  background-color: ${props => props.cor};
  flex: ${props => props.flexivel};
  height: 50px;  
`;

const Pagina = styled.View`
  flex: 1;
  flex-direction: column;
`;

const squareBuilder = (color, amount) => {
  return [
    [...Array(amount)].map((_, i) => <Quadrado cor={color}></Quadrado>)
  ];
};

const App = () => {
  return [   
    <Pagina>      
      <Quadrado flexivel={1} cor="black"></Quadrado>

      {squareBuilder("blue", 2)}
      {squareBuilder("red", 0)}
      {squareBuilder("green", 1)}
    </Pagina>
  ];
}

export default App;