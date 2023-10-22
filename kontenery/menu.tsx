import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import styles from '../styles/menus';

const MenuBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuItems = ['Option 1', 'Option 2', 'Option 3'];
  
    const handleMenuClick = () => {
      setMenuOpen(!menuOpen);
    };

    return (
        <View style={styles.menuBar}>
            {menuOpen && (
                <View style={styles.menu}>
                    <FlatList
                        data={menuItems}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View>
                                <TouchableOpacity style={styles.menuItem}>
                                    <Text>{item}</Text>
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