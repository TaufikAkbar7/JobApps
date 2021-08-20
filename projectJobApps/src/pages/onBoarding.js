import React from 'react';
import { Text, View, Image } from 'react-native';
import { Btn } from '../components';

const onBoarding = ({ navigation }) => {

    return (
        <View style={{ flex: 1, backgroundColor: "#F6F6F6" }}>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Image style={{marginTop: 150}} source={require('../assets/Group_1360.png')} />
                <View style={{ marginTop: 101 }}>
                    <Text style={{ fontSize: 18.6, color: "#3E4F88", lineHeight: 31, fontWeight: "500" }}>Join Us & Explore Thousand</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontSize: 18.6, color: "#3E4F88", lineHeight: 31, fontWeight: "500" }}>of</Text>
                        <Text style={{ fontSize: 18.6, marginLeft: 6, color: "#3E4F88", lineHeight: 31, fontWeight: "bold" }}>Great Job</Text>
                    </View>
                </View>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center", flex: 0.2 }}>
            <Btn title="Get Started" br={10} width={335} height={54} ph={105} pv={18} color="#FFFFFF" bg="#3E4F88" aliItems="center" jusContent="center" fs={18} lh={18} fw="bold" to="Home" navigation={navigation} />
            </View>
        </View>
    );
};

export default onBoarding;