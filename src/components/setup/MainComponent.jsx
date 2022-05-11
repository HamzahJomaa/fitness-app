import React, { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import OptionComponent from "./OptionComponent"
import MainButton from '../button01'

const SetupComponent = ({ title, options, next, saveOption }) => {
    const [selected, setSelected] = useState(null)
    return (
        <View style={style.container}>
            <View>
                <Text style={style.question}>{title}</Text>
                {options.length > 0 && options.map((option, index) => (
                    <OptionComponent
                        select={(data) => { 
                            setSelected(data) 
                            saveOption(data)
                        }}
                        id={index}
                        status={selected === index ? 1 : 0}
                        key={index}
                        title={option} />
                ))}
            </View>
            <MainButton press={()=>{ next() }} title={"Next"} />
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        marginTop: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "75%"
    },
    question: {
        color: "white",
        textAlign: "center",
        fontSize: 25
    }
})
export default SetupComponent