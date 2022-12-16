import { TouchableOpacity, StyleSheet, Dimensions, View, SafeAreaView, Text, Image } from 'react-native'
import React from 'react'
import { assets } from '../../constants'

//const map = {'uri': 'https://developers.google.com/static/maps/images/landing/hero_maps_static_api.png'}

const DashboardBar = polls => {
      return (
         <View style={styles.bar}>
              <TouchableOpacity style={styles.current}>
                  <Text> Dashboard </Text>
                  </TouchableOpacity>
          <TouchableOpacity onPress={polls.polls} style={styles.other}>
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
            paddingTop: '3%',
            paddingBottom: '3%',
            paddingLeft: '4%',
            paddingRight: '4%',
            marginTop: '-5%',
            flexDirection: "row",
            alignItems: "center"
        },
        current: {
            backgroundColor: "white",
            borderRadius: 30,
            alignItems: "center",
            width: '45%',
            paddingTop: '2%',
            paddingLeft: '3%',
            paddingRight: '3%',
            paddingBottom: '2%',
        },
        other: {
            backgroundColor: "green",
            borderRadius: 30,
            alignItems: "center",
            paddingTop: '2%',
            paddingLeft: '3%',
            paddingRight :'3%',
            paddingBottom: '2%',
            width: '45%',
        }
    }
)

export default DashboardBar;