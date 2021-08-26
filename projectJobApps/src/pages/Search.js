import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Card } from '../components';

const Search = ({ navigation, route }) => {
    const { data, search } = route.params;
    const [listData, setData] = useState([]);

    useEffect(() => {
        setData(data);
    }, [setData, data])

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{
                     flex: 1,
                     marginTop: 8,
                     backgroundColor: "#F6F6F6",
                     width: 375,
                     height: 640,
                     justifyContent: 'flex-start',
                     alignItems: 'center',
                }}>
            {listData.length != 0 ? (
                <View style={{ 
                    flex: 1,
                }}
                    >
                    <View style={{ 
                        top: 30,
                        justifyContent: 'center', 
                        alignItems: 'center',
                    }}
                        >
                        <Text style={{ fontSize: 18 }}>
                            {listData.length} lowongan <Text style={{fontWeight: 'bold'}}>{search}</Text></Text>
                    </View>
                    <View style={{
                      width: 320,
                      height: 400,
                      marginTop: 30,
                      flexWrap: "wrap",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignContent: "space-around" 
                    }}>
                    {listData.map(item => (
                        <Card key={item.title} item={item} navigation={navigation}/>
                    ))}
                    </View>
                </View>
            ) : (
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        fontSize: 20
                    }}
                    >
                        Sorry, no vacancies found</Text>
                </View>
            )}
            </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Search;
