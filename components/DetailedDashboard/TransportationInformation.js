import {TouchableOpacity, StyleSheet, Dimensions, View, SafeAreaView, Text, Image, FlatList} from 'react-native'
import React, {useState} from 'react'
import {TripBoardData} from '../../constants/dummy.js'
import Alert from "./Alert";
import Modal from "react-native-modal";
import Vote from "../../screens/Vote";

const TransportationInformation = (vote) => {
  //   const [isPolls, setModalVisible] = useState(false);
  // // const [isCreate, setModalVisible] = useState(false);
  //
  // const toggleModal = () => {
  //   setModalVisible(!isPolls);
  // };
      return (
    <View>
          <View style={styles.information}>
                <Text style={styles.text}>Transportation Polls </Text>
                <View style={styles.poll}>
                    <Text style={styles.time}>4:07 AM - 7:12 AM</Text>
                    <Text style={styles.duration}>6h 5m (Nonstop)</Text>

                    <Text style={styles.location}>NEWARK (EWR) -> Los An..(LAX)</Text>

                    <View style={styles.totalVotes}>
                        <View style={styles.votedAlready}/>
                    </View>
                </View>
          </View>
          <View style={styles.information}>
                <Text style={styles.text}>Lodging Polls </Text>
          </View>

            <View style={styles.information}>
                <Text style={styles.text}>Activity Polls </Text>
                <View style={styles.poll}>
                    <TouchableOpacity onPress={vote.vote}>
                        <Text style={styles.time}>Koko Cafe </Text>
                        <Text style={styles.duration}>123 Westbury Drive, New York</Text>

                        <Text style={styles.location}>4.7/5</Text>
                        <Text style={styles.location}>4.7/5</Text>

                        <View style={styles.totalVotes}>
                            <View style={styles.votedAlready}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
      )
}

const styles = StyleSheet.create(
    {
        information: {
            backgroundColor: "rgba(0, 0, 0, 0.04)",
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
        poll: {
            backgroundColor: 'white',
            marginTop: '3%',
            borderRadius: '5%',
        },
        duration: {
            marginLeft: '3%',
            fontSize: 10
        },
        location:{
            marginLeft: '3%',
            marginTop: '3%',
            fontSize: 12
        },
        time: {
            marginLeft: '3%',
            marginTop: '3%',
            fontWeight: "bold"
        },
        votedAlready: {
            backgroundColor: '8BD768',
            width: '82%'
        },
        totalVotes: {
            backgroundColor: 'E5E5E5',
            width: '45%',
            marginLeft: '3%',
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