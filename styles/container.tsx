import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    center: {
      flex: 2,
      alignItems: 'center',
      justifyContent:'center',
    },
    bottom: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    top: {
      flex: 1,
      marginTop: 40,
      alignItems: 'flex-start',
      justifyContent: 'flex-start'
    }
  });

export default styles