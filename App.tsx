import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import container from './styles/container'
import opacity from './styles/opacity'
import text_button from './styles/text_button';
import { useEffect, useState } from 'react';
import { lambda } from './cokolwiek';
import MenuBar from './kontenery/menu';
import menus from './styles/menus';
import AppNavigation from './appnavigator';

export default function App() {
  return (
    <AppNavigation/>

  );
}

