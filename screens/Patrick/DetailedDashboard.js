import {StyleSheet, View, Button} from "react-native";
import {StatusBar} from "expo-status-bar";
import Map from "../../components/DetailedDashboard/Map.js";
import DashboardPage from "./DashboardPage.js"
import PollsPage from "./PollsPage.js"
import {useState} from "react";


function TwoTierDashboard({navigation}) {
  const [isPolls, setModalVisible] = useState(true);

  const toggleModal = () => {
    setModalVisible(!isPolls);
  };

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
      polls={toggleModal}/>
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

export default TwoTierDashboard;