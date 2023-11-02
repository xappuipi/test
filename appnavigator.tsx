import React from 'react';
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Screen1 from "./ekrany/screen1";
import App from './App';
import MenuBar from './kontenery/menu';


const Stack = createStackNavigator();

function AppNavigation() {
    return
    (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="MenuBar">
                <Stack.Screen name="MenuBar" component={MenuBar}/>
                <Stack.Screen name="Screen1" component={Screen1}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation