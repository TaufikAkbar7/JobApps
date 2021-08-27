import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Pressable } from 'react-native';
import { createTwoButtonAlert } from '../components';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import Archive2 from '../assets/Group_782.svg';
import ProfileImg from '../assets/Ellipse_7.svg';
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
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Profile