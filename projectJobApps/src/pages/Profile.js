import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import ProfileImg from '../assets/Ellipse_7.svg';
import { BottomNav } from '../components';
import { profile } from '../dummy/data';

const Profile = ({ navigation }) => {

    const {
        name,
        age,
        email,
        location,
        nasional,
        phone,
        sex
    } = profile;

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{
                    flex: 1,
                    height: 705,
                }}>
                    <View style={{
                        flex: 1,
                        backgroundColor: "#F6F6F6",
                    }}>
                        <View style={{
                            flex: 0.4,
                            backgroundColor: "rgba(62, 79, 136, 1)",
                            borderBottomLeftRadius: 50,
                            borderBottomRightRadius: 50,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <ProfileImg width={150} height={80} />
                            <Text style={{
                                color: '#FFFFFF',
                                marginTop: 10,
                                fontSize: 18
                            }}>
                                Hi, {name}</Text>
                        </View>
                        <View style={{
                            flex: 0.6,
                            backgroundColor: "#F6F6F6",
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <View style={{
                                // backgroundColor: 'red',
                                width: 320,
                                height: 350,
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    borderBottomColor: '#000',
                                    borderBottomWidth: 2
                                }}>
                                    <Text>Full Name:</Text>
                                    <Text>{name}</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    borderBottomColor: '#000',
                                    borderBottomWidth: 2,
                                    marginTop: 10
                                }}>
                                    <Text>Phone:</Text>
                                    <Text>{phone}</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    borderBottomColor: '#000',
                                    borderBottomWidth: 2,
                                    marginTop: 10
                                }}>
                                    <Text>Email:</Text>
                                    <Text>{email}</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    borderBottomColor: '#000',
                                    borderBottomWidth: 2,
                                    marginTop: 10
                                }}>
                                    <Text>Location:</Text>
                                    <Text>{location}, {nasional}</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    borderBottomColor: '#000',
                                    borderBottomWidth: 2,
                                    marginTop: 10
                                }}>
                                    <Text>Age:</Text>
                                    <Text>{age}</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    borderBottomColor: '#000',
                                    borderBottomWidth: 2,
                                    marginTop: 10
                                }}>
                                    <Text>Sex:</Text>
                                    <Text>{sex}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <BottomNav navigation={navigation}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Profile