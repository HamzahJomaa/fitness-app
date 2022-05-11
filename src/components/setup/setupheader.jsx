import React from "react";
import { Text, View,TouchableOpacity,StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { primaryPurple } from "../../styles/colors";


const SetupHeader = ({navigation,step,total}) =>{
    return(
        <View style={style.container}>
            <TouchableOpacity onPress={() => {navigation.openDrawer()}}><Icon name="arrow-left" color={"white"} solid size={40} /></TouchableOpacity>
            <Text style={{color: primaryPurple}}>Step {step} of {total}</Text>
            <TouchableOpacity onPress={()=>{ navigation.navigate("home") }}><Text>Skip</Text></TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20,
    },
})

export default SetupHeader