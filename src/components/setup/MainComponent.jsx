import React, { useState, useContext } from "react"
import { StyleSheet, Text, TouchableOpacity, View, Button } from "react-native"
import OptionComponent from "./OptionComponent"
import MainButton from '../button01'
import { StepsContext, AnswerContext } from "../../views/SetupScreen";
import DatePicker from 'react-native-date-picker'
import { backgroundoption, primaryPurple } from "../../styles/colors"
import LinearGradient from "react-native-linear-gradient"
import Moment from 'moment';
import { Tab, TabView } from '@rneui/themed';
import { TextInput } from "react-native-gesture-handler";

const SetupComponent = ({ next }) => {
    Moment.locale("en")
    const question = useContext(StepsContext);
    const [answer, setAnswer] = useContext(AnswerContext);

    const [index, setIndex] = React.useState(0);

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    const [selected, setSelected] = useState(null)

    return (
        <View style={style.container}>
            <View>
                <Text style={style.question}>{question.title}</Text>
                {
                    (question.key === "gender" || question.key === "goal"  || question.key === "level") && (question.options.length > 0 && question.options.map((option, index) => (
                        <OptionComponent
                            select={(data) => {
                                setSelected(data)
                                let new_result = {}
                                new_result[question.key] = data
                                setAnswer(prev => ({ ...prev, ...new_result }))
                            }}
                            status={selected === option.id ? 1 : 0}
                            key={index}
                            option={option}
                            />
                    )))
                }
                {question.key === "dob" && (<>

                    <TouchableOpacity onPress={() => setOpen(true)} >
                        <LinearGradient style={style.dateButton} start={{ x: .3, y: 0.1 }} end={{ x: 0.5, y: 1 }} colors={backgroundoption}>
                            <Text style={style.dateText}>{Moment(date).format('dd MMM')}</Text>
                        </LinearGradient>
                    </TouchableOpacity>


                    <DatePicker
                        modal
                        open={open}
                        date={date}
                        onConfirm={(date) => {
                            setOpen(false)
                            setDate(date)
                            setAnswer(prev => ({ ...prev, dob: date }))
                        }}
                        mode="date"
                        onCancel={() => {
                            setOpen(false)
                        }}
                    /></>
                )}
                {(question.key === "height" || question.key === "weight")  && (
                    <View style={style.inputContainer}>
                        <LinearGradient style={style.textLinear} colors={backgroundoption}>
                            <TextInput  key={question.key} onChangeText={(e) => {
                                let new_result = {}
                                new_result[question.key] = e
                                setAnswer(prev => ({ ...prev, ...new_result }))
                            }} style={{ fontSize: 19 }} keyboardType="numeric" />
                        </LinearGradient>
                        <Text style={style.unitText}>{question.key === "height" ? "cm" : "Kg"}</Text>
                    </View>
                )}
            </View>
            <MainButton press={() => { next() }} title={"Next"} />
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
    },
    dateButton: {
        margin: 20,
        padding: 20,
        borderRadius: 10,
        height: 40,
        color: "red"
    },
    dateText: {
        textAlign: "center",
        height: "100%",
        textAlignVertical: "center",
        fontSize: 20
    },
    height: {
        height: "50%"
    },
    textLinear: {
        padding: 20,
        borderRadius: 10,
        height: 90,
        width: "100%"
    },
    inputContainer: {
        marginTop: 20,
        width: "25%",
        marginRight: "auto",
        marginLeft: "auto",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end"
    },
    unitText: {
        fontSize: 20,
        color: "white",
        marginLeft: 10
    }

})
export default SetupComponent