import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, JobDetail, onBoarding } from '../pages';

const Route = () => {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="onBoarding" component={onBoarding}/>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="JobDetail" component={JobDetail}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Route;