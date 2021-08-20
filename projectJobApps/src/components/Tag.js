import React from 'react';
import { Text, View } from 'react-native';

const Tag = ({ ph, pv, bg, fs, color, lh, br, name }) => {
    return (
        <View style={{backgroundColor: bg, paddingHorizontal: ph, paddingVertical: pv, borderRadius: br, marginRight: 7}}>
            <Text style={{ color: color, fontSize: fs, lineHeight: lh }}>{name}</Text>
        </View>
    );
};

export default Tag;