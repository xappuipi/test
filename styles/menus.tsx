import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    menuBar: {
      flexDirection: 'row',
      marginTop: 20,
       // justifyContent: "flex-start",
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      backgroundColor: '#f0f0f0',
      padding: 10,
    },
    menu: {
      backgroundColor: 'white',
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
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
  });

export default styles