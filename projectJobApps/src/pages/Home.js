import { View, StyleSheet, Text, Image, TextInput, ScrollView } from 'react-native';
import React from 'react';
import Title from '../components/Title';
// import Filter from '../assets/Group1.svg';
// import Search from '../assets/search.svg';

const Home = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.hero}>
                    <View style={{ flex: 0.5, flexDirection: "row" }}>
                        <View>
                            <Text style={styles.subTitle}>Hello, <Text style={styles.textBold}>Taufik</Text></Text>
                            <Title text="Find Your Great Job" fontFamily="inter" color="#3E4F88" fontSize={20} lineHeight={18} fontWeight="bold" paddingVerti={10}/>
                        </View>
                        <Image style={styles.img} source={require('../assets/Ellipse7.png')} />
                    </View>
                    <View style={styles.wrapTextInput}>
                        <View style={styles.textInput}>
                            {/* <Search style={{ width: 19, height: 19, tintColor: "red" }} source={require('../assets/search.svg')} /> */}
                            <TextInput style={{ width: 200, height: 40, color: "#000" }} placeholder="Search a Job" placeholderTextColor="#BDBDBD" />
                        </View>
                        <View style={styles.wrapFilter}>
                            {/* <Filter source={require('../assets/Group1.svg')} /> */}
                        </View>
                    </View>
                </View>
                <View style={styles.carouselJob}>
                    <Title text="Most Popular" fontSize={14} lineHeight={18} fontWeight="600" fontFamily="inter" color="#333333"/>
                </View>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 8,
        backgroundColor: "rgba(246, 246, 246, 1)",
        width: 375,
        height: 812,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    hero: {
        flex: 0.2,
        width: 320,
        height: 50,
        // backgroundColor: "red",
        paddingTop: 15,
        right: 5
    },
    title: {
        fontFamily: "inter",
        color: "#3E4F88",
        fontSize: 20,
        lineHeight: 18,
        top: 10,
        fontWeight: 'bold',
        // backgroundColor: "blue",
        paddingTop: 2
    },
    subTitle: {
        fontFamily: "inter",
        fontSize: 14,
        lineHeight: 18,
        width: 104,
        // backgroundColor: "green",
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
        paddingVertical: 8,
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
        backgroundColor: "rgba(62, 79, 136, 1)"
    }
})
export default Home;