import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    menuBar: {
      flex: 1,
      flexDirection: 'row',
      marginTop: 20,
       // justifyContent: "flex-start",
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      backgroundColor: '#f0f0f0',
      padding: 10,
    },
    menu: {
      backgroundColor: '#ffd8f4',
      padding: 10,
    },
    menuItem: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      alignItems: 'center',
      justifyContent: 'center'
    },
    Item_menu: {
      borderRadius: 2,
      borderColor: '#000',
      backgroundColor: 'blue',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
  });

export default styles