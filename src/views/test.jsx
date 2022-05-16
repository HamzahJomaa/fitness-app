import React from "react"
import Swiper from 'react-native-swiper'
import { StyleSheet, Text, View } from 'react-native'


const SwiperComponent = () => {
    return (
        <Swiper style={styles.wrapper} autoplay={true}>
            
        </Swiper>
    )
}

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
})

export default SwiperComponent