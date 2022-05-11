import React from "react"
import { StyleSheet, Text, TouchableOpacity,View } from "react-native"
import LinearGradient from "react-native-linear-gradient"
import { backgroundoption } from "../../styles/colors"


const OptionComponent = ({ id ,title, status, select }) => {
    const text = <Text style={style.containerText} >{title}</Text>
    return (
        <TouchableOpacity onPress={()=>{select(id)}} style={style.containerTouchable}>
            {status ? 
            (<LinearGradient start={{ x: .3, y: 0.1 }} end={{ x: 0.5, y: 1 }} style={style.containerLinear} colors={backgroundoption}>
                {text}
            </LinearGradient>) 
            : 
            (<View style={[style.containerView,style.containerLinear]}>
                {text}
            </View>)
            }
        </TouchableOpacity>
    )
}


const style = StyleSheet.create({
    containerTouchable: {
        margin: 10,
    },
    containerLinear: {
        padding: 20,
        borderRadius: 20,
        height: 100
    },
    containerView:{
        backgroundColor: "#2D3450"
    },
    containerText:{
        textAlign:"center",
        height: "100%",
        textAlignVertical: "center",
        fontSize: 20
    }
})

export default OptionComponent