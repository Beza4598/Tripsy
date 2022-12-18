import {TouchableOpacity, StyleSheet, Dimensions, View, SafeAreaView, Text, Image, FlatList} from 'react-native'
import React, {useState} from 'react'
import {TripBoardData} from '../../constants/dummy.js'
import Alert from "./Alert";
import Modal from "react-native-modal";

const CreatePoll = create => {
      return (
    <View>
            <TouchableOpacity style={styles.newPoll}>
                  <Text style={styles.createPoll}>Create New Poll </Text>
            </TouchableOpacity>

        </View>
      )
}

const styles = StyleSheet.create(
    {
        newPoll:{
            backgroundColor: "#1B5D29",
            borderRadius: '50%',
            marginLeft: '15%',
            marginRight: '15%',
            marginTop: '5%',
            paddingTop: '3%',
            paddingBottom: '3%',
            paddingLeft: '3%',
            paddingRight: '3%',
            alignItems: "center"
        },
        createPoll:{
            color: "white",
            fontWeight: "bold",
        }
    }
)

export default CreatePoll;