import {TouchableOpacity, StyleSheet, Dimensions, View, SafeAreaView, Text, Image, FlatList} from 'react-native'
import React, {useState} from 'react'
import {TripBoardData} from '../../constants/dummy.js'
import Alert from "./Alert";
import Modal from "react-native-modal";

const TransportationInformation = create => {
    const [isPolls, setModalVisible] = useState(false);
  // const [isCreate, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isPolls);
  };
      return (
    <View>
          <View style={styles.information}>
                <Text style={styles.text}>Transportation Polls </Text>
          </View>
          <View style={styles.information}>
                <Text style={styles.text}>Lodging Polls </Text>
          </View>
            <View style={styles.information}>
                <Text style={styles.text}>Location Polls </Text>
            </View>

        </View>
      )
}

const styles = StyleSheet.create(
    {
        information: {
            backgroundColor: "#E9E2E2",
            marginLeft: '3%',
            marginRight: '3%',
            marginTop: '5%',
            borderRadius: '10%',
            paddingTop: '4%',
            paddingRight: '3%',
            paddingLeft: '3%',
            paddingBottom: '4%'
        },
        heading: {
            paddingTop: '2%',
            paddingBottom: '2%',
            paddingLeft: '2%',
            backgroundColor: "white",
            borderRadius: '10%',
            marginBottom: '3%'
        },
        text:{
            fontWeight: "bold",
            fontSize: 15
        },
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

export default TransportationInformation;