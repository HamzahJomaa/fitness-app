import React, { createContext, useContext, useEffect } from "react"
import { useState } from "react"
import { Text } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import SetupHeader from "../components/setup/setupheader"
import { MainStyle } from "../styles"
import SetupComponent from "../components/setup/MainComponent"

export const StepsContext = React.createContext();
export const AnswerContext = React.createContext()

const SetupScreen = ({ navigation }) => {
    const [questions, setQuestions] = useState([
        {
            key: "level",
            title: "Choose training level",
            options: [
                { id: "MED01", title: "Medium", desc: "This is description 01"},
                { id: "IT01", title: "Irregular Training", desc: "This is description 02" },
                { id: "MED02", title: "Medium", desc: "This is description 03" },
                { id: "IT02", title: "Irregular Training", desc: "This is description 04" },
            ]
        },
        {
            key: "weight",
            title: "Select Weight"
        },
        {
            key: "height",
            title: "Select Height"
        },
        {
            key: "dob",
            title: "Select birth date",
        },
        {
            key: "gender",
            title: "Choose Gender",
            options: [{ id: "W", title: "Women" }, { id: "M", title: "Men" }, { id: "O", title: "Others" }]
        },
        {
            key: "goal",
            title: "Choose main goal",
            options: [{ id: "LW", title: "Lose Weight" }, { id: "KF", title: "Keep fit" }, { id: "GS", title: "Get stronger" }, { id: "GMM", title: "Gain muscle mass" }]
        }
    ])
    const [step, setStep] = useState(1)
    const [total, setTotal] = useState(questions.length)
    const [answer, setAnswer] = useState()

    return (
        <StepsContext.Provider value={questions[step - 1]}>
            <AnswerContext.Provider value={[answer, setAnswer]}>
                <SafeAreaProvider style={MainStyle.background}>
                    <SafeAreaView>
                        <SetupHeader navigation={navigation} backward={() => { setStep(prev => prev - 1) }} step={step} total={total} />
                        <SetupComponent key={1} next={() => {
                            console.log(answer)
                            if (step === total) {
                                return navigation.navigate("home")
                            }
                            setStep(prev => prev + 1)
                        }} />
                    </SafeAreaView>
                </SafeAreaProvider>
            </AnswerContext.Provider>
        </StepsContext.Provider>
    )
}


export default SetupScreen