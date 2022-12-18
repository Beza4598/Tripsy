import { StyleSheet, View, Button, FlatList, Text } from 'react-native';
import Discover from '../components/Discover';
import HomeHeader from '../components/HomeHeader';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import TripBoardCard from '../components/TripBoardCard';
import CreateGroup from "./Patrick/CreateGroup";
import Modal from "react-native-modal";
import FlightCardsDiscover from '../components/FlightCardsDiscover';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';



function Home(props) {
 const [isModalVisible, setModalVisible] = useState(false);
  // const [isCreate, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };



  return (

  <View style={ styles.container}>
   <StatusBar/>

   <View style={styles.header}>
    <HomeHeader name='Josh'/>
   </View>

   <View style={styles.my_boards}>
      <Discover visible={toggleModal}
      />
   </View>

  <Modal isVisible={isModalVisible}>
    <CreateGroup visible={toggleModal}/>
    </Modal>

   <View style={styles.planning_dashboard}>
      <FlightCardsDiscover/>
   </View>

  </View>

  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
  },
  my_boards : {
      flex : 2,
  }, 
  header : {
      flex : 1,
  },
  planning_dashboard : {
    flex : 2
  }
  
})

export default Home;