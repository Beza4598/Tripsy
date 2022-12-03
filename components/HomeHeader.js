import { StyleSheet, View, Text, Image} from 'react-native'
import React from 'react'
import { assets } from '../constants' 

const HomeHeader = (props) => {
  return (
    <View style={styles.header}>
      <View>
        <Image style={styles.logo} source={assets.logo} />
      </View>
      <Text style={styles.text_top}> Hi {props.name},</Text>
      <Text style={styles.text_bottom}> Plan your next adventure</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header : {
        flex: 1,
        width: '100%',
        height: '15%',
        backgroundcolor: '#eee',
        justifyContent: 'top',
        paddingLeft: '4%'
    },
    text_top : {
        marginTop: '5%',
        color: '#0A2E36',
        fontWeight: 'bold',
        fontSize: 17,
        alignSelf: 'left'
    },
    text_bottom : {
        color: '#1E9F1B',
        fontSize: 17,
        alignSelf: 'left'
    },
    logo : {
        marginTop: '7%',
        width : 70,
        height: 70,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginBottom: -25
    },
    logo_desc : {
        alignSelf: 'center',
        color: '#0A2E36',
        fontWeight: 'medium',
        fontSize: 12

    }
})

export default HomeHeader