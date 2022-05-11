import React from 'react'

import { Text, Button } from 'react-native'
import { MainStyle } from "../styles/index"

import MainButton from '../components/button01'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView>
          <Text style={MainStyle.blackText} >This is Home Screen</Text>
          <MainButton title={"Click Me"} press={() => { navigation.openDrawer() }} />
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  )
}

export default HomeScreen