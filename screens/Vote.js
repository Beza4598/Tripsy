
import {SafeAreaView, StyleSheet, View, Text } from 'react-native'
import React from 'react'
import PollData from '../components/PollData'
import PollHeader from '../components/PollHeader'
import VoteYesNo from '../components/VoteYesNo'
import { useState } from 'react'

const Vote = (decision) => {
    
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <PollHeader/>
        </View>
        <View style={styles.information}>
            <PollData name='Britney Spears'/>
        </View>
        <View style={styles.vote}>
            <VoteYesNo vote={decision.vote}/>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
            backgroundColor: "white",
            marginLeft: '5%',
            marginRight: '5%',
            marginTop: '20%',
            marginBottom: '20%',
        borderRadius: '10%'
    },
    header:{
        flex: 1,
    },
    information : {
        flex: 3,
    },
    vote : {
        flex: .5,
    }
})

export default Vote