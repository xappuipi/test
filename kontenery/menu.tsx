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
        <View>
            {menuOpen && (
                <View style={styles.menu}>
                    <FlatList
                        data={menuItems}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.menuItem}>
                            <Text>{item}</Text>
                          </TouchableOpacity>
                        )}
                        windowSize={5}
                    />
                </View>
            )}
                <View style = {styles.menuBar}>
                    <TouchableOpacity onPress={handleMenuClick}>
                        <Text>Menu</Text>
                    </TouchableOpacity>
                </View>

        </View>
    );
};
  export default MenuBar;