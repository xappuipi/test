import React, { useState } from 'react';
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Screen1 from "../ekrany/screen1";
import App from '../App';
import container from '../styles/container';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { lambda } from '../cokolwiek';
import opacity from '../styles/opacity';
import text_button from '../styles/text_button';
import styles from '../styles/menus';
import Home from '../ekrany/home';



function MenuBar(props: any){
    

    const [jakis_int, setJakis_int] = useState(0);
    const { navigation } = props
    //const navigation = useNavigation();

    const [menuOpen, setMenuOpen] = useState(false);
    const menuItems = [
        {id: 1 , name:'test'}, 
        {id: 2, name: 'Reset'}, 
        {id: 3, name:'Option 3'}
    ];
  
    const handleMenuClick = () => {
      setMenuOpen(!menuOpen);
    };
    const handleItemClick = (id: number) => {
        if(id === 1){
            navigation.navigate('Screen1');
        }
        if(id === 2){
            
        }
    }

    return (
        <View style={styles.menuBar}>
            {menuOpen && (
                <View style={styles.menu}>
                    <FlatList
                        data={menuItems}
                        //keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View>
                                <TouchableOpacity style={styles.menuItem} onPress={() => handleItemClick(item.id)}>
                                    <Text>{item.name}</Text>
                                </TouchableOpacity>
                            </View>
                          
                        )}
                    
                    />
                    <View>
                        <TouchableOpacity style={styles.Item_menu} onPress={handleMenuClick}>
                            <Text>Menu</Text>
                        </TouchableOpacity>
                    </View>                    
                </View>
            )}

                    {!menuOpen && (
                    <View>
                    <TouchableOpacity onPress={handleMenuClick} style={styles.Item_menu}>
                        <Text>Menu</Text>
                    </TouchableOpacity>
                    </View>
                    )}
            <Home/>
        </View>
    );
};
  export default MenuBar;