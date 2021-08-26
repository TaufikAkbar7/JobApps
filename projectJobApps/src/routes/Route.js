import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { 
    Home, 
    JobDetail, 
    onBoarding, 
    Search, 
    Archive, 
    Setting 
} from '../pages';

const Route = () => {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="onBoarding"
                    component={onBoarding}
                    options={{ headerShown: false }} />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }} />
                <Stack.Screen
                    name="JobDetail"
                    component={JobDetail}
                    options={{
                        headerTransparent: true,
                        headerBackTitleVisible: false,
                        headerTitle: false,
                        headerTintColor: '#fff',
                        headerShadowVisible: false,
                        headerTitleAlign: 'center',
                        title: 'Job Detail',
                        headerBackTitleStyle: {
                            fontSize: 30
                        } 
                    }} />
                <Stack.Screen
                    name="Search"
                    component={Search}
                    options={{
                        headerTitleAlign: 'center'
                    }}
                />
                <Stack.Screen
                    name="Archive"
                    component={Archive}
                    options={{
                        headerTitleAlign: 'center'
                    }}
                />
                <Stack.Screen
                    name="Setting"
                    component={Setting}
                    options={{
                        headerTitleAlign: 'center'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Route;