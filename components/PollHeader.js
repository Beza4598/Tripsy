import {SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { assets } from '../constants'

const PollHeader = () => {
  return (
    <SafeAreaView style = {styles.headerContainer}>
      <TouchableOpacity onPress={()=> {}}>
        <Image source={assets.backArrow} style={styles.backButton}/>
      </TouchableOpacity>
      <Text style={styles.title}> Activity Poll</Text>
      <Text style={styles.location}>
      Koko Cafe</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
     headerContainer : {
        flex: 1,
        backgroundColor: '#FFFFFF',
        margin: '5%',
    },
    title : {
        marginTop: '8%',
        fontSize: 25, 
        fontWeight: 'bold',
        color: '#0A2E36',
    },
    location:{
        marginTop: '8%',
        fontSize: 20, 
        color: '#0A2E36',
        paddingLeft: '1%'
    },
    backButton:{
      width: 30,
      height: 30,
      resizeMode: 'contain',
      paddingRight: 20,
    }
})

export default PollHeader