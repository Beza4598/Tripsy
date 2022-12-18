import { ImageBackground, StyleSheet, Dimensions, View, SafeAreaView, Text, Image } from 'react-native'
import React from 'react'
import { assets } from '../../constants'

//const map = {'uri': 'https://developers.google.com/static/maps/images/landing/hero_maps_static_api.png'}

const win = Dimensions.get('window');

const Map = () => {
  return (
    <View style={styles.container}>
          <ImageBackground source={assets.map} style={styles.images}>
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
        images: {
            width: 450,
        },
        // //from https://stackoverflow.com/questions/39631895/how-to-set-image-width-to-be-100-and-height-to-be-auto-in-react-native
        // images: {
        //     width: win.width,
        //     height: 400 * (win.width/541),
        //     margin: "auto"
        // },
        whereTo: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderRadius: 20,
            padding: 14,
            marginTop: '25%',
            marginLeft: 40,
            marginRight: 40,
            marginBottom: '25%',
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