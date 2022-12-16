import {StyleSheet, View, Button} from "react-native";
import {StatusBar} from "expo-status-bar";
import Map from "../../components/DetailedDashboard/Map.js";
import DashboardPage from "./DashboardPage.js"
import PollsPage from "./PollsPage.js"
import {useState} from "react";
import Modal from "react-native-modal";


function TwoTierDashboard() {
  const [isPolls, setModalVisible] = useState(false);
  // const [isCreate, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isPolls);
  };

  // const createPoll = () => {
  //     setModalVisible(!isCreateVisible);
  // }

  if (isPolls){
    return (
        <View style={styles.board}>
        <Map />
        <PollsPage
        polls={toggleModal}/>

        </View>
    )
  }
  return (
    <View style={styles.board}>
      <Map />
      <DashboardPage
      polls={toggleModal} />

    </View>
  )
}

const styles = StyleSheet.create({
  board: {
    backgroundColor: "white",
    paddingBottom: 10,
    marginTop: '0%',
  }
})

export default TwoTierDashboard;