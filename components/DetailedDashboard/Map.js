import { ImageBackground, StyleSheet, Dimensions, View, SafeAreaView, Text, Image } from 'react-native'
import React from 'react'

const map = {'uri': 'https://developers.google.com/static/maps/images/landing/hero_maps_static_api.png'}

const Map = () => {
  return (
    <View style={styles.container}>
          <ImageBackground source={map} >
          <View style={styles.whereTo}>
              <Text style={styles.h2}> First, </Text>
              <Text style={styles.h1}> WHERE TO? </Text>

              <View style={styles.discover}>
                  <Text style={styles.h3}> Discover </Text>
              </View>
          </View>
        </ImageBackground>
      </View>

  )
}

const styles = StyleSheet.create(
    {
    container : {
        width: 450
    },
    new: {
        backgroundColor: '#000000',
        marginBottom: 20,
    },
    whereTo: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 20,
        padding: 14,
        marginTop: 60,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 60,
        alignItems: "center"
    },
    discover: {
        backgroundColor: "#106034",
        display: "flex",
        marginTop: 50,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        borderRadius: 10,
    },
    h1: {
        fontSize: 40,
        color: "white"
    },
    h2: {
        fontSize: 25,
        color: "white"
    },
    h3: {
        fontSize: 20,
        color: "white"
    }
}
)

export default Map;