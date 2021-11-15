import React, { useState } from 'react';
import { View, Text } from 'react-native';
import PhotoCard from './src/components/PhotoCard';
import globalSheet from './src/styles/sheet';


const cardRowBuilder = (amount) => {
    return [
        <View style={globalSheet.row} >{
            [...Array(amount)].map((_, i) =>  
                <PhotoCard></PhotoCard>
            )
        }</View>
    ];
};

const App = () => {
    let owner = "potatoq";
    let rowSize = 3;
    return (
        <View style={{ maxWidth: 1000, flex: rowSize }, globalSheet.container}>
            <Text style={globalSheet.title}>Galeria de imagens do {owner} </Text>
            <Text style={globalSheet.subtitle}>Pseud-rand images from picsum.photos</Text>
            
            {cardRowBuilder(rowSize)}
            {cardRowBuilder(rowSize)}

            <PhotoCard size={{width: 150 * rowSize}} ></PhotoCard>          
        </View>
    );
};


export default App;