import { StyleSheet } from "react-native";

export const DrawerMainStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      menuContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      },
      menuItemsCard: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      },
      circleContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        padding: 10,
      },
})