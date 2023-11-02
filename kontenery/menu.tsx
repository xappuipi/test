import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import styles from '../styles/menus';
import { useNavigation } from '@react-navigation/native';
import Screen1 from '../ekrany/screen1';
import AppNavigation from '../App';

function MenuBar(props: any){
    const { navigation } = props
    //const navigation = useNavigation();

    const [menuOpen, setMenuOpen] = useState(false);
    const menuItems = [
        {id: 1 , name:'test'}, 
        {id: 2, name: 'Option 2'}, 
        {id: 3, name:'Option 3'}
    ];
    const [activeItemId, setActiveItemId] = useState(null);
  
    const handleMenuClick = () => {
      setMenuOpen(!menuOpen);
    };
    const handleItemClick = (id: number) => {
        if(id === 1){
            navigation.navigate('Screen1');
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
                    <TouchableOpacity onPress={handleMenuClick}>
                        <Text>Menu</Text>
                    </TouchableOpacity>
                    </View>
                    )}
        </View>
    );
};
  export default MenuBar;