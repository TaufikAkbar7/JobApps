import { View, StyleSheet, Text, Image, TextInput, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { mostPopular, tagJob, cardData } from '../dummy/data';


const Home = ({ navigation }) => {

    const data = (item) => {
        const list = {
            title: item.title,
            lokasi: item.lokasi,
            tag: item.tag,
            image: item.image,
            description: item.description,
            requirment: item.requirement
        };
        return list;
    }

    const mostPopularItem = ({ item }) => {
        return (
            <TouchableOpacity activeOpacity={0.5} style={styles.cardCarousel} onPress={() => navigation.navigate('JobDetail', data(item))}>
                <View style={styles.warpheaderCardJob}>
                    <View style={{ width: 43, height: 43, backgroundColor: "rgba(58, 119, 255, 0.1)", borderRadius: 8, padding: 6 }}>
                        <Image style={{ width: 32, height: 31 }} source={{ uri: item.image }} />
                    </View>
                    <Text style={{ fontSize: 11, lineHeight: 13.31, fontWeight: "400" }}>${item.paidAt} - ${item.paidEnd} / Mo</Text>
                </View>
                <Text style={styles.titleJob}>{item.title}</Text>
                <Text style={styles.lokasiJob}>{item.lokasi}</Text>
                <View style={styles.wrapCardTagJob}>
                    {item.tag.map(itemTag => (
                        <View style={styles.tagJob}>
                            <Text style={{ fontSize: 9, lineHeight: 10.89, fontWeight: "400" }}>{itemTag.name}</Text>
                        </View>
                    ))}
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.hero}>
                        <View style={{ flex: 0.8, flexDirection: "row" }}>
                            <View>
                                <Text style={styles.subTitle}>Hello, <Text style={styles.textBold}>Taufik</Text></Text>
                                <Text style={styles.title}>Find Your Great Job</Text>
                            </View>
                            <Image style={styles.img} source={require('../assets/Ellipse7.png')} />
                        </View>
                        <View style={styles.wrapTextInput}>
                            <View style={styles.textInput}>
                                {/* <Search style={{ width: 19, height: 19, tintColor: "red" }} source={require('../assets/search.svg')}/> */}
                                <TextInput style={{ width: 200, height: 40, color: "#000" }} placeholder="Search a Job" placeholderTextColor="#BDBDBD" />
                            </View>
                            <View style={styles.wrapFilter}>
                                <Image style={{ width: 22, height: 19.25 }} source={require('../assets/Group.png')} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.carouselJob}>
                        <Text style={styles.titlePopular}>Most Popular</Text>
                        <FlatList
                            data={mostPopular}
                            style={{ marginTop: 12 }}
                            renderItem={mostPopularItem}
                            keyExtractor={item => item.id}
                            horizontal={true}
                        />
                        <ScrollView horizontal={true}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                {tagJob.map((tag, i) => (
                                    <View key={i} style={styles.wrapTagJob}>
                                        <Text style={{ color: "#828282", fontSize: 13, lineHeight: 16 }}>{tag.name}</Text>
                                    </View>
                                ))}
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.listCard}>
                        {cardData.map((card, i) => (
                            <TouchableOpacity onPress={() => navigation.navigate('JobDetail', data(card))}>
                            <View key={i} style={{ backgroundColor: "#FFFFFF", width: 155, height: 127, borderRadius: 8, padding: 11 }}>
                                <View style={{ width: 43, height: 43, backgroundColor: "rgba(52, 168, 83, 0.1)", borderRadius: 8, padding: 6 }}>
                                    <Image style={{ width: 32, height: 31 }} source={{ uri: card.image }} />
                                </View>
                                <Text style={{ fontSize: 14, lineHeight: 18, fontWeight: "bold", color: "#333333", top: 12 }}>{card.title}</Text>
                                <Text style={{ fontSize: 9, lineHeight: 10.89, color: "#828282", top: 12 }}>{card.lokasi}</Text>
                                <Text style={{ fontSize: 9, lineHeight: 10.89, color: "#828282", top: 18 }}>${card.paidAt} - ${card.paidEnd} / Mo</Text>
                            </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
                {/* <View style={styles.bottomNav}>
                    <Text>wwwdd</Text>
                </View> */}
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 8,
        backgroundColor: "#F6F6F6",
        width: 375,
        height: 812,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    content: {
        flex: 1,
        // width: 330,
        // backgroundColor: "blue"
    },
    bottomNav: {
        backgroundColor: "red",
        height: 70,
        alignItems: "center",
        flexDirection: "row",
    },
    hero: {
        flex: 0.7,
        width: 320,
        height: 50,
        // backgroundColor: "green",
        paddingTop: 15,
        right: 5
    },
    title: {
        fontFamily: "inter",
        color: "#3E4F88",
        fontSize: 20,
        lineHeight: 18,
        fontWeight: "bold",
        paddingVertical: 10,
    },
    subTitle: {
        fontFamily: "inter",
        fontSize: 14,
        lineHeight: 18,
        width: 104,
        // backgroundColor: "green",
    },
    titlePopular: {
        fontSize: 14,
        lineHeight: 18,
        fontWeight: "bold",
        fontFamily: "inter",
        color: "#333333",
    },
    titleJob: {
        top: 7,
        fontSize: 14,
        fontWeight: "bold",
        lineHeight: 16.94,
    },
    lokasiJob: {
        top: 10,
        fontSize: 11,
        fontWeight: "400",
        lineHeight: 13.31,
        color: "#828282"
    },
    textBold: {
        color: "#333333",
        fontWeight: 'bold',
    },
    wrapTextInput: {
        flexDirection: "row",
        width: 310,
        height: 50,
        justifyContent: "space-between",
        alignItems: "center",
        // backgroundColor: "green",
    },
    img: {
        width: 41,
        height: 41,
        left: 90
    },
    textInput: {
        flex: 0.9,
        width: 310,
        height: 44,
        borderRadius: 8,
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#FFFFFF",
    },
    wrapFilter: {
        width: 44,
        height: 44,
        paddingHorizontal: 11,
        paddingVertical: 12,
        backgroundColor: "rgba(62, 79, 136, 1)",
        borderRadius: 8
    },
    carouselJob: {
        // backgroundColor: "blue",
        width: 320,
        height: 220,
        right: 5
    },
    cardCarousel: {
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 11,
        paddingVertical: 13,
        borderRadius: 8,
        marginRight: 12,
        width: 241,
        height: 134
    },
    wrapCardTagJob: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        right: 5,
        width: 180,
        // backgroundColor: "blue", 
        top: 20
    },
    tagJob: {
        paddingHorizontal: 9,
        paddingVertical: 2,
        backgroundColor: "#F2F2F2",
        borderRadius: 4,
    },
    warpheaderCardJob: {
        flexDirection: "row",
        width: 215,
        justifyContent: "space-between",
        alignItems: "center",
        color: "#333333"
    },
    wrapTagJob: {
        backgroundColor: "#E0E0E0",
        paddingHorizontal: 12,
        paddingVertical: 3,
        borderRadius: 8,
        marginRight: 7
    },
    listCard: {
        // backgroundColor: "red",
        width: 320,
        height: 400,
        top: 17,
        right: 5,
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "space-between"
    },
})
export default Home;