import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { listDataArchive } from '../dummy/data';
import { BottomNav, Card } from '../components';

const Archive = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{
                    flex: 1,
                    backgroundColor: "#F6F6F6",
                    alignItems: "center",
                    height: 578,
                }}>
                    <View style={{
                        height: 400,
                        marginTop: 20,
                        width: 320,
                        flexWrap: 'wrap',
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignContent: "space-around",
                    }}>
                        {listDataArchive.map(item => (
                            <Card key={item.title} item={item} navigation={navigation} />
                        ))}
                    </View>
                </View>
                <BottomNav navigation={navigation}/>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Archive