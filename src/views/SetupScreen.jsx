import React from "react"
import { useState } from "react"
import { Text } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import SetupHeader from "../components/setup/setupheader"
import { MainStyle } from "../styles"
import SetupComponent from "../components/setup/MainComponent"

const SetupScreen = ({ navigation }) => {
    const [step, setStep] = useState(1)
    return (
        <SafeAreaProvider style={MainStyle.background}>
            <SafeAreaView>
                <SetupHeader navigation={navigation} step={step} total={8} />

                <SetupComponent
                    key={1}
                    title={"Choose gender"}
                    options={["Women", "Men", "Others"]}
                    next={() => { setStep(prev => prev + 1) }}
                />
            </SafeAreaView>

        </SafeAreaProvider>
    )
}


export default SetupScreen