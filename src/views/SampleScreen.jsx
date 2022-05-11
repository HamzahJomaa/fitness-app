import React from 'react'

import { Text, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MainStyle } from "../styles/index"
const SampleScreen = ({ navigation }) => {
  return (
    <>
      <SafeAreaView>
        <Text style={MainStyle.blackText}>This is Sample Screen</Text>
        <Button title={"Click Me"} onPress={() => { navigation.openDrawer() }} />
      </SafeAreaView>
    </>
  )
}

export default SampleScreen