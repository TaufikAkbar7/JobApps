import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import { Tag, Btn } from '../components';

const JobDetail = ({ route, navigation }) => {

    const { id, title, image, description, lokasi, requirment, tag } = route.params;

    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: "blue", flex: 1 }}>
                <View style={{ height: 278 }}>
                    <Image style={{ width: 375, height: 300 }} source={{ uri: image }} />
                </View>
                <ScrollView>
                    <View style={styles.content}>
                        <View style={{ height: 500 }}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={styles.wrapImage}>
                                    <Image style={{ width: 57, height: 56 }} source={{ uri: image }} />
                                </View>
                                <View style={{ flex: 1 }}>
                                    <View style={{ left: 13 }}>
                                        <Text style={{ fontSize: 18, fontWeight: "bold", lineHeight: 18 }}>{title}</Text>
                                        <Text style={{ marginTop: 4, fontSize: 12, lineHeight: 18 }}>{lokasi}</Text>
                                        <View style={{ flexDirection: "row", marginTop: 9 }}>
                                            {tag.map((item, i) => (
                                                <Tag key={i} name={item.name} bg="#3E4F88" br={5} ph={11} pv={3} fs={11} lh={13.31} color="#FFFFFF" />
                                            ))}
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.wrapButton}>
                                <Btn flex={0.5} bg="#FFFFFF" aliItems="center" jusContent="center" title="Description" br={6} color="#3E4F88" fw="bold" fs={13} lh={15.73} />
                                <Btn flex={0.5} bg="transparent" aliItems="center" jusContent="center" title="Company" color="#828282" lh={15.73} fs={13} />
                            </View>
                            <View style={{ marginTop: 18, height: 390 }}>
                                <View style={{ flex: 0.3 }}>
                                    <Text style={{ color: "#333333", fontWeight: "bold", fontSize: 12, lineHeight: 14.52 }}>Job Description</Text>
                                    <Text style={{ marginTop: 6, color: "#828282", lineHeight: 14.52, fontSize: 12 }}>{description}</Text>
                                </View>
                                <View style={{ flex: 0.5, marginTop: 22 }}>
                                    <Text style={{ color: "#333333", fontWeight: "bold", fontSize: 12, lineHeight: 14.52 }}>Requirements</Text>
                                    <View style={{marginTop: 8}}>
                                    {requirment.map((item, i) => (
                                         <View key={i} style={{flexDirection: "row", justifyContent: "center", alignItems: "flex-start", paddingVertical: 5}}>
                                         <View style={{backgroundColor: "#828282", width: 5, height: 5, borderRadius: 50, top: 5, left: 2}}></View>
                                         <Text style={{color: "#828282", marginLeft: 7 ,lineHeight: 13.31, fontSize: 11}}>{item.name}</Text>
                                     </View>
                                    ))}
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={{ opacity: 2.0, backgroundColor: "#F6F6F6", height: 113, justifyContent: 'center', alignItems: "center", flexDirection: "row" }}>
                <Btn width={267} height={50} paddingVertical={14} paddingHorizontal={87} borderRadius={10} title="Apply Now" color="#FFFFFF" aliItems="center" jusContent="center" fs={18} lh={21.78} fw="bold" navigation={navigation} to="Home" bg="#3E4F88" br={10}/>
                <View style={{ backgroundColor: "transparent", width: 50, height: 50, marginRight: 5, padding: 10 }}>
                    <Image style={{ width: 29, height: 29 }} source={require('../assets/Group_783.png')} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 375,
        height: 812,
    },
    content: {
        backgroundColor: "#F6F6F6",
        justifyContent: "center",
        width: 360,
        height: 550,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingVertical: 29,
        paddingHorizontal: 25,
    },
    wrapButton: {
        backgroundColor: "#EBEBEB",
        height: 46,
        marginTop: 18,
        paddingVertical: 6,
        paddingHorizontal: 8,
        flexDirection: "row",
        borderRadius: 8,
    },
    wrapImage: {
        width: 74,
        height: 74,
        backgroundColor: "rgba(79, 157, 77, 0.1)",
        borderRadius: 8,
        paddingVertical: 9,
        paddingHorizontal: 8
    },
})

export default JobDetail;