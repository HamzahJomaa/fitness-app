import React from 'react'

import { Text,Button } from 'react-native'
import {MainStyle} from "../styles/index"
const SampleScreen = ({navigation}) => {
  return (
    <>
    <Text style={MainStyle.blackText}>This is Sample Screen</Text>
    <Button title={"Click Me"} onPress={()=>{navigation.openDrawer()}} /> 
    </>
  )
}

export default SampleScreen