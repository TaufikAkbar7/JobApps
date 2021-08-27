import React from 'react';
import { View, Pressable } from 'react-native';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import Archive2 from '../assets/Group_782.svg';

const BottomNav = ({ navigation }) => {
    return (
        <View style={{
            height: 70,
            backgroundColor: "#FFFFFF",
            alignItems: "center",
            flexDirection: "row",
            paddingVertical: 21,
            paddingHorizontal: 68,
            justifyContent: 'space-between'
        }}>
            <View>
                <Pressable onPress={() => navigation.navigate('Home')}>
                    <SimpleIcon name="home" size={25} color="#BDBDBD" />
                </Pressable>
            </View>
            <View>
                <Pressable onPress={() => navigation.navigate('Archive')}>
                    <Archive2 width={25} height={25} color="#BDBDBD" />
                </Pressable>
            </View>
            <View>
                <Pressable onPress={() => navigation.navigate('Profile')}>
                    <SimpleIcon name="user" size={25} color="#BDBDBD" />
                </Pressable>
            </View>
        </View>
    );
}

export default BottomNav;