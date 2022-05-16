import React,{useContext} from "react";
import { Text, View,TouchableOpacity,StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { primaryPurple } from "../../styles/colors";
import { StepsContext } from "../../views/SetupScreen";

const SetupHeader = ({navigation,step,total,backward}) =>{
    return(
        <View style={style.container}>
            <TouchableOpacity onPress={backward}><Icon name="arrow-left" color={"white"} solid size={40} /></TouchableOpacity>
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