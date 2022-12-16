
import {SafeAreaView, StyleSheet, View, Text } from 'react-native'
import React from 'react'
import PollData from '../components/PollData'
import PollHeader from '../components/PollHeader'
import VoteYesNo from '../components/VoteYesNo'
import { useState } from 'react'

function Vote() {
    const [disabled, setDisabled] = useState(false);
    
    const handleClick = () => {
        IsLoggedIn && Like();
        IsLoggedIn && setDisabled(true);
    };
    
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <PollHeader/>
        </View>
        <View style={styles.information}>
            <PollData name='Britney Spears'/>
        </View>
        <View style={styles.vote}>
            <VoteYesNo disabled={disabled} onClick={handleClick}/>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
            backgroundColor: "white",
            width: '100%',
            height: '100%',
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