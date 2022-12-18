import { TouchableOpacity, StyleSheet, Dimensions, View, SafeAreaView, Text, Image } from 'react-native'
import React from 'react'
import { assets } from '../../constants'
import DashboardBar from "./DashboardBar";

//const map = {'uri': 'https://developers.google.com/static/maps/images/landing/hero_maps_static_api.png'}

const PollBar = polls => {
  return (
     <View style={styles.bar}>
          <TouchableOpacity onPress={polls.polls} style={styles.other}>
              <Text style={styles.text}> Dashboard </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.current}>
              <Text style={styles.text}> Polls </Text>
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create(
    {
        bar: {
            backgroundColor: "#E9E2E2",
            marginLeft: '10%',
            marginRight: '10%',
            borderRadius: 30,
            paddingTop: '1%',
            paddingBottom: '1%',
            paddingRight: '2%',
            paddingLeft: '2%',

            marginTop: '-5%',
            flexDirection: "row",
            alignItems: "center"
        },
        current: {
            backgroundColor: "white",
            borderRadius: 30,
            alignItems: "center",
            width: '50%',
            paddingTop: '4%',
            paddingLeft: '3%',
            paddingRight: '3%',
            paddingBottom: '4%',
        },
        alerts: {
            backgroundColor: "gray",
            padding: '5%'
        },
        other: {
            borderRadius: 30,
            alignItems: "center",
            paddingTop: '4%',
            paddingLeft: '3%',
            paddingRight :'3%',
            paddingBottom: '4%',
            width: '50%',
        },
        text:{
            fontWeight: "bold"
        }
    }
)

export default PollBar;