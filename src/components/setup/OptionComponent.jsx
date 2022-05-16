import React from "react"
import { StyleSheet, Text, TouchableOpacity,View } from "react-native"
import LinearGradient from "react-native-linear-gradient"
import { backgroundoption } from "../../styles/colors"


const OptionComponent = ({ option, status, select }) => {
    const text = <View style={style.containerText}>
        <Text style={style.TitleText} >{option.title}</Text> 
        {option.desc && <Text style={style.DescText}>{option.desc}</Text>}
        </View>
    
    return (
        <TouchableOpacity onPress={()=>{select(option.id)}} style={style.containerTouchable}>
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
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        fontSize: 20,
    },
    TitleText:{
        fontSize: 20,
        color:"white"
    },
    DescText:{
        color: "white",
        fontWeight: "300"
    }
})

export default OptionComponent