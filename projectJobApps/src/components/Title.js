import React from 'react';
import { Text } from 'react-native';

const Title = ({ lineHeight, color, fontSize, fontWeight, text, fontFamily, paddingVerti }) => {
    return (
        <Text style={{color: color, fontWeight: fontWeight, fontSize: fontSize, fontFamily: fontFamily, lineHeight: lineHeight, paddingVertical: paddingVerti}}>{text}</Text>
    );
};

export default Title;