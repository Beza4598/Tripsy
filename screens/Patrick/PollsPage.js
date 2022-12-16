import {StyleSheet, View, Text} from "react-native";
import PollsBar from "../../components/DetailedDashboard/PollsBar.js"
import TransportationPolls from "../../components/DetailedDashboard/TransportationInformation"
import CreatePoll from "../../components/DetailedDashboard/CreatePoll.js"
import React, {useState} from "react";
import CreateGroup from "./CreateGroup";
import Modal from "react-native-modal";

const PollsPage = (polls) => {
    const [isCreate, setModalVisible] = useState(false);
  // const [isCreate, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isCreate);
  };

  return (
    <View style={styles.board}>
        <PollsBar polls={polls.polls}/>

        <TransportationPolls/>

        <CreatePoll create={toggleModal}/>

        <Modal isVisible={isCreate}>
            <Text> Hello</Text>
        </Modal>

    </View>
  )
}

const styles = StyleSheet.create({
  board: {
    backgroundColor: "white",
    paddingBottom: 10,
    marginTop: '0%'
  }
})

export default PollsPage;