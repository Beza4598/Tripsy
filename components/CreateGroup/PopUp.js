import { StyleSheet, TouchableOpacity, View, Pressable, Text, Image } from 'react-native'
import React from 'react'

const PopUp = visible => {
  return (
    <View style = {styles.container}>
        <View style={styles.right}>
            <TouchableOpacity style={styles.exit} onPress={visible.visible}>
            </TouchableOpacity>
        </View>

        <View style = {styles.new}>
              <Text style ={styles.title}>New Travel Group</Text>
          </View>

          <View style = {styles.entry}>
              <Text style ={styles.h4}>Invite from Contacts</Text>
          </View>

    </View>

  )
}

const styles = StyleSheet.create(
    {
        container: {
            paddingLeft: 5,
            paddingBottom: 3,
            borderRadius: 20,
            alignItems: 'left',
        },
        right:{
            // backgroundColor: "black",
            paddingLeft: '90%',
            width: '100%',
            marginTop: 5,
        },
        exit:{
            backgroundColor: "#F65151",
            height: 20,
            width: 20,
            borderRadius: 20,
            marginTop: 10,
        },
        new: {
            paddingLeft: '5%',
            marginTop: 15,
            marginBottom: 15,
        },
        entry: {
            width: '100%',
            paddingLeft: '5%',
            marginBottom: 15,
        },
        h4: {
            color: '#000000',
            marginTop: 0,
            fontWeight: "15",
        },
        h5: {
            color: '#000000',
            fontWeight: "15",
            marginBottom: 50,
            marginTop: 0,
            marginLeft: 1
        },
        title : {
            fontSize: 20,
            fontWeight: "bold",
            color: '#0A2E36',
        }
    }
)

export default PopUp;