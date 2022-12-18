import {StyleSheet, View, Text} from "react-native";
import PollsBar from "../../components/DetailedDashboard/PollsBar.js"
import TransportationPolls from "../../components/DetailedDashboard/TransportationInformation"
import CreatePoll from "../../components/DetailedDashboard/CreatePoll.js"
import React, {useState} from "react";
import CreateGroup from "./CreateGroup";
import Modal from "react-native-modal";
import Vote from "../Vote.js"

const PollsPage = (polls) => {
    const [isCreate, setModalVisible] = useState(false);
    const [isVote, setModal] = useState(false);
  // const [isCreate, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isCreate);
  };

  const toggleVote = () => {
    setModal(!isVote)
  }

  return (
    <View style={styles.board}>
        <PollsBar polls={polls.polls}/>

        <TransportationPolls vote={toggleVote}/>

         <Modal isVisible={isVote}>
            <Vote vote={toggleVote}/>
        </Modal>

        <CreatePoll create={toggleModal}/>

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