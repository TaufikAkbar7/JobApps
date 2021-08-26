import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import Archive from '../assets/Archive.svg';

const Card = ({ item, navigation }) => {

    const listData = (data) => {
        const list = {
            title: data.title,
            lokasi: data.lokasi,
            tag: data.tag,
            image: data.image,
            description: data.description,
            requirment: data.requirement
        };
        return list;
    }

    const sliceName = (name) => {
        if(name.length >= 18) {
            return `${name.slice(0, 16)}...`;
        } else {
            return name
        }
        
    }

    return (
        <TouchableOpacity onPress={() => navigation.navigate('JobDetail', listData(item))}>
            <View
                style={{
                    backgroundColor: "#FFFFFF",
                    width: 155,
                    height: 127,
                    borderRadius: 8,
                    padding: 11,
                }}
            >
                <View style={{
                    width: 130,
                    height: 43,
                    // backgroundColor: 'red',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start'
                }}>
                <View style={{
                    width: 43,
                    height: 43,
                    backgroundColor: "rgba(52, 168, 83, 0.1)",
                    borderRadius: 8,
                    padding: 6,
                }}
                >
                    <Image style={{ width: 32, height: 31 }} source={{ uri: item.image }} />
                </View>
                <Archive width={15} height={20}/>
                </View>
                <Text style={{
                    fontSize: 14,
                    lineHeight: 18,
                    fontWeight: "bold",
                    color: "#333333",
                    top: 12
                }}
                >
                    {sliceName(item.title)}</Text>
                <Text style={{
                    fontSize: 9,
                    lineHeight: 10.89,
                    color: "#828282",
                    top: 12
                }}
                >
                    {item.lokasi}</Text>
                <Text style={{
                    fontSize: 9,
                    lineHeight: 10.89,
                    color: "#828282",
                    top: 18
                }}
                >
                    ${item.paidAt} - ${item.paidEnd} / Mo</Text>
            </View>
        </TouchableOpacity>
    );
}

export default Card;