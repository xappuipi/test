import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import container from './styles/container'
import opacity from './styles/opacity'
import text_button from './styles/text_button';
import { useEffect, useState } from 'react';
import { lambda } from './cokolwiek';

export default function App() {
  const [jakis_int, setJakis_int] = useState(0);


  return (
    <View style={container.container}>
      <View  style={container.container_bottom}>
        <Text>{jakis_int}</Text>
        <Text>{lambda()}</Text>
      </View>
      {/* <StatusBar style="auto" /> */}
      <View  style={container.container_bottom}>
        <TouchableOpacity style={opacity.opacity} onPress={()=>{setJakis_int(jakis_int+1)}}>
        <Text style={text_button.color}>abcd</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}


