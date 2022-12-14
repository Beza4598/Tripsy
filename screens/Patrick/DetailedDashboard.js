import {StyleSheet, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import Map from "../../components/DetailedDashboard/Map.js";
import PopUp from "../../components/CreateGroup/PopUp";

function CreateGroup() {
  return (
    <View style={styles.board}>
      <Map />

    </View>
  )
}

const styles = StyleSheet.create({
  board: {
    backgroundColor: "white",
    marginTop: '20%',
    height: '90%',
    paddingBottom: 10
  }
})

export default CreateGroup;