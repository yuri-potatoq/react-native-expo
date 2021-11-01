import React, {useState} from "react";
import styled from "styled-components/native";


const Quadrado = styled.View`
  background-color: ${props => props.cor};
  height: 50px;  
  width: 50px;
  margin: 10px;
`;

const Pagina = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const squareBuilder = (amount) => {
  // retorna array de um string com valores hex
  const genHex = () =>
    (Math.random() * 0xfffff * 1000).toString(16).split('.')
  ;

  return [
    [...Array(amount)].map((_, i) =>  
      <Quadrado cor={"#" + genHex()[1]}></Quadrado>
    )    
  ];
};

const mosaicoBuilder = (amount) => {
  return [
    [...Array(amount)].map((_, i) =>  
      <p>{squareBuilder(amount)}</p>
    )
  ]
};

const App = () => {
  return [   
    <Pagina>  
      {mosaicoBuilder(10)}
    </Pagina>
  ];
}

export default App;