import { TouchableOpacity, StyleSheet, Dimensions, View, SafeAreaView, Text, Image } from 'react-native'
import React from 'react'
import { assets } from '../../constants'

//const map = {'uri': 'https://developers.google.com/static/maps/images/landing/hero_maps_static_api.png'}

const PollBar = polls => {
  return (
     <View style={styles.bar}>
          <TouchableOpacity onPress={polls.polls} style={styles.other}>
              <Text> Dashboard </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.current}>
              <Text> Polls </Text>
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create(
    {
        bar: {
            backgroundColor: "#E9E2E2",
            marginLeft: '20%',
            marginRight: '20%',
            borderRadius: 30,
            padding: '3%',
            marginTop: '-5%',
            flexDirection: "row"
        },
        current: {
            backgroundColor: "white",
            borderRadius: 30,
            alignItems: "center",
            width: '45%',
            paddingTop: '2%',
            paddingBottom: '2%'
        },
        other: {
            backgroundColor: "green",
            borderRadius: 30,
            alignItems: "center",
            padding: '2%',
            width: '45%',
            paddingTop: '2%',
            paddingBottom: '2%'
        }
    }
)

export default PollBar;