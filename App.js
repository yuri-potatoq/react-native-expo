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

    return (
        <View style={{ maxWidth: 450 }, globalSheet.container}>
            <Text style={globalSheet.title}>Galeria de imagens do {owner} </Text>
            <Text style={globalSheet.subtitle}>Pseud-rand images from picsum.photos</Text>
            
            {cardRowBuilder(3)}
            {cardRowBuilder(3)}

            <View style={globalSheet.container}>
                <PhotoCard size={{width: 450, height: 150}} ></PhotoCard>
            </View>            
        </View>
    );
};


export default App;