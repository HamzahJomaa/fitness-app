import { StyleSheet } from "react-native";
import { secondaryDark, primaryDark } from "./colors";


const borderRadius = 40
const margin = 10
const padding = 10

export const MainStyle = StyleSheet.create({
    background: {
        backgroundColor: primaryDark,
    },
    textInput: {
        height: 45,
        padding,
        paddingLeft: padding * 2,
        backgroundColor: secondaryDark,
        borderRadius,
        margin
    },
    blackText: {
        color: "black",
        backgroundColor: "red"
    }
})


export const ButtonStyle = StyleSheet.create({
    touchable: {
        margin
    },
    linear: {
        padding: 10,
        borderRadius,
    },
    text: {
        textAlign: "center",
        color: "white",
    }
})