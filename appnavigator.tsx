import React, { useState } from 'react';
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Screen1 from "./ekrany/screen1";
import App from './App';
import MenuBar from './kontenery/menu';
import container from './styles/container';
import { View, Text, TouchableOpacity } from 'react-native';
import { lambda } from './cokolwiek';
import opacity from './styles/opacity';
import text_button from './styles/text_button';
import Home from './ekrany/home';


const Stack = createStackNavigator();

const AppNavigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="MenuBar">
                <Stack.Screen name="MenuBar" component={MenuBar}/>
                <Stack.Screen name="Screen1" component={Screen1}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation