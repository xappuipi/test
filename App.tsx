import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import container from './styles/container'
import opacity from './styles/opacity'
import text_button from './styles/text_button';

export default function App() {
  return (
    <View style={container.container}>
      <View  style={container.container_bottom}>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
      {/* <StatusBar style="auto" /> */}
      <View  style={container.container_bottom}>
        <TouchableOpacity style={opacity.opacity}>
        <Text style={text_button.color}>abcd</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}


