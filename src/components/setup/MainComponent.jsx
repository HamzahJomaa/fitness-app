import React, { useState, useContext } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import OptionComponent from "./OptionComponent"
import MainButton from '../button01'
import { StepsContext, AnswerContext } from "../../views/SetupScreen";

const SetupComponent = ({next }) => {
    const question = useContext(StepsContext);
    const [answer, setAnswer] = useContext(AnswerContext);

    const [selected, setSelected] = useState(null)
    
    return (
        <View style={style.container}>
            <View>
                <Text style={style.question}>{question.title}</Text>
                {question.options.length > 0 && question.options.map((option, index) => (
                    <OptionComponent
                        select={(data) => { 
                            setSelected(data)
                            let new_result = {}
                            new_result[question.key] = data
                            setAnswer(prev =>  ({...prev,...new_result}))
                        }}
                        id={option.id}
                        status={selected === option.id ? 1 : 0}
                        key={index}
                        title={option.title} />
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