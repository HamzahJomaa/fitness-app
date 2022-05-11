import React, { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { NavigationType } from "react-router-dom";
import { ButtonStyle } from "../styles";

import { primaryPurple, secondaryPurple } from "../styles/colors";

const MainButton = ({ title,press }) => {
    return <TouchableOpacity onPress={press} style={ButtonStyle.touchable}>
        <LinearGradient style={ButtonStyle.linear} colors={[secondaryPurple, primaryPurple]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} >
            <Text style={ButtonStyle.text}>{title}</Text>
        </LinearGradient>
    </TouchableOpacity>
}

export default MainButton

