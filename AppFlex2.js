import React, {useState} from "react";
import styled from "styled-components/native";


const Quadrado = styled.View`
  background-color: ${props => props.cor};
  height: 50px;  
  width: 50px;
  
`;

const Pagina = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const App = () => {
  return [   
    <Pagina>      
      <Quadrado cor="red"></Quadrado>
      <Quadrado cor="green"></Quadrado>
      <Quadrado cor="blue"></Quadrado>
      <Quadrado cor="#FFFF00"></Quadrado>
    </Pagina>
  ];
}

export default App;