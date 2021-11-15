import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';


const sheet = StyleSheet.create({
  container:{
    flex:1
  },
  title:{
    textAlign:'center',
    marginTop:25,
    fontSize:30,
    color:"#7289da"
  },
  input:{
    backgroundColor:'#DDD',
    borderRadius:10,
    margin:15,
    padding:10,
    color:'#000',
    fontSize:23
  },
  botao:{
    justifyContent:'center',
    alignItems:'center',
    margin:15,
    backgroundColor:'#7289da',
    padding:10,
  },
  textoBotao:{
    color:'#fff',
    fontSize:25,
  },
});


const App = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const executarCalculos = () => {
    if (isNaN(peso) || isNaN(altura)) {
      alert(`Dados inválidos ${peso} || ${altura}`);  
      return
    }

    const alt = altura / 100;
    const imc = peso / (alt * alt);
    alert("Seu IMC é: " + imc.toFixed(2));
  }

  return (
    <View style={sheet.container} backgroundColor="#2c2f33">
      <Text style={sheet.title}>Calcule seu IMC</Text>
      <TextInput 
        style={sheet.input}
        value={peso}
        onChangeText={peso => setPeso(peso)}
        placeholder="Peso (kg)" 
        keyboardType="numeric"     
        backgroundColor="#Ffffff"
      />
      <TextInput 
        style={sheet.input}
        value={altura}  
        onChangeText={altura => setAltura(altura)}
        placeholder="Altura (cm)" 
        keyboardType="numeric" 
        backgroundColor="#ffffff" 
      />
      <TouchableOpacity style={sheet.botao} onPress={executarCalculos}>
        <Text style={sheet.textoBotao}>Calcular</Text>
      </TouchableOpacity>
    </View>
    
  );
}
export default App;