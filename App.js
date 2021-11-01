import React, {useState} from "react";
import { Image } from "react-native";
import styled from "styled-components/native";


const Quadrado = styled.View`
  background-color: ${props => props.cor};
  height: 150px;  
  width: 150px;
`;

const Header = styled.View`
  flex-direction: row;
  background-color: #DDD;
  justify-content: center;
  height: 500px;
  align-items: center;
  flex-wrap: wrap;
`;

const Pagina = styled.View`
  flex: 1;
`;

const App = () => {
  return [   
    <Pagina>  
     <Header>
      <Quadrado cor="red">
        <Image 
          source={require('./src/images/mine-sx.jpg')} 
          style={{
              width: 150, 
              height: 150, 
              background: '#AAA'
            }}

        />
      </Quadrado>
      <Quadrado cor="green"></Quadrado>
      <Quadrado cor="blue"></Quadrado>
     </Header>
    </Pagina>
  ];
}

export default App;