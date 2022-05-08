import React from 'react'

import { Text,Button } from 'react-native'
import {MainStyle} from "../styles/index"

const HomeScreen = ({navigation}) => {
  return (
    <>
    <Text style={MainStyle.blackText} >This is Home Screen</Text>
    <Button title={"Click Me"} onPress={()=>{navigation.openDrawer()}} /> 
    </>
  )
}

export default HomeScreen