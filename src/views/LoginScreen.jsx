import React from 'react'

import { Text, View } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import MainButton from '../components/button01'
import { MainStyle } from '../styles'
import { primaryPurple } from '../styles/colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaProvider style={MainStyle.background}>
      <SafeAreaView>
        <View style={{ marginTop: 200 }}>
          <Text style={{ color: "white", textAlign: "center", fontSize: 28, marginBottom: 10 }}>Sign in</Text>
          <TextInput placeholder='Email / Username' autoCapitalize="none" style={MainStyle.textInput} />
          <TextInput placeholder='Password' autoCapitalize="none" style={MainStyle.textInput} secureTextEntry={true} />
          
          <MainButton 
            press={() => { navigation.navigate("home") }} 
            title={"Sign In"} 
            />
          
          <Text style={{ color: "white", textAlign: "center", fontSize: 12, marginTop: 25 }}>Forgot Password?</Text>
        </View>
        <View style={{ marginTop: 100, display: "flex", flexDirection: "column", justifyContent: "space-evenly", height: "30%" }}>
          <Text style={{ color: "white", textAlign: "center", fontSize: 18 }}>Sign in with</Text>
          <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", paddingLeft: 100, paddingRight: 100 }}>
            <TouchableOpacity><Icon name="facebook" color={"white"} solid size={40} /></TouchableOpacity>
            <TouchableOpacity><Icon name="gmail" color={"white"} solid size={40} /></TouchableOpacity>
            <TouchableOpacity><Icon name="apple" color={"white"} solid size={40} /></TouchableOpacity>
          </View>
          <Text style={{ color: "white", textAlign: "center", fontSize: 12, marginTop: 5 }}>Don't have an account? <Text style={{ color: primaryPurple }}>Sign Up</Text></Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default LoginScreen