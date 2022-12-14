import { StyleSheet, ScrollView, View, SafeAreaView, Text, Image } from 'react-native'
import React from 'react'

const Button = () => {
  return (
    <View style={styles.top}>
        <View style={styles.exit}>
        </View>
    </View>
  )
}

const styles = StyleSheet.create(
    {
        top: {
            display:"flex",
            width: '100%',
            justifyContent: "flex-end",
            alignItems: "left"
        },
        exit: {
            width: '10%',
            backgroundColor: "#F65151",
            borderRadius: 50,
        }
    }
)

export default Button;