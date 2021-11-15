import React from 'react';
import { View, Image } from 'react-native';


const PhotoCard = (props) => {
    let {width = 150, height = 150} = {...props.size};

    let uri = `https://picsum.photos/seed/${Math.random().toFixed(2)}/${width}/${height}?random=4&blur=1`;

    return (
        <Image 
            source={{uri: uri}} 
            style={{
                width: width, 
                height: height, 
                padding: 4,
                margin: 4,
                background: '#AAA'              
            }}
            resizeMode="cover" 
        />
    );
};

export default PhotoCard;