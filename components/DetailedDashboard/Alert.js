import { TouchableOpacity, StyleSheet, Dimensions, View, SafeAreaView, Text, Image } from 'react-native'
import React from 'react'
import {assets, TripBoardData} from '../../constants'

//const map = {'uri': 'https://developers.google.com/static/maps/images/landing/hero_maps_static_api.png'}

const Alert = (props) => {
    return(
        <View style={styles.bar}>
            <Text style={styles.text}> {props.message} </Text>
        </View>
    )

}

const styles = StyleSheet.create(
    {
        bar: {
            backgroundColor: "white",
            paddingLeft: '1%',
            paddingRight: '1%',
            paddingTop: '2%',
            paddingBottom: '2%',
            marginTop: '1%',
            marginBottom: '1%',
            borderRadius: '10%'
        },
        text:{
            fontSize: 12
        }
    }
)

export default Alert;