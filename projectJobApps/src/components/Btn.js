import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

const Btn = ({ 
    flex, 
    bg, 
    title, 
    aliItems, 
    jusContent, 
    br, 
    color, 
    fs, 
    lh, 
    fw, 
    to, 
    navigation, 
    pv, 
    ph, 
    width, 
    height 
}) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(to)} style={{ flex: flex, backgroundColor: bg, borderRadius: br, alignItems: aliItems, justifyContent: jusContent, width: width, height: height, paddingHorizontal: ph, paddingVertical: pv }}>
            <Text style={{ color: color, fontSize: fs, lineHeight: lh, fontWeight: fw }}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Btn;