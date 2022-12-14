import {StyleSheet, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import PopUp from "../../components/CreateGroup/PopUp";
import Contacts from "../../components/CreateGroup/Contacts";

const CreateGroup = visible => {
  return (
    <View style={styles.newGroupBox}>
      <PopUp
          visible={visible.visible}
      />
      <Contacts />

    </View>
  )
}

const styles = StyleSheet.create({
  newGroupBox : {
    backgroundColor: "white",
    marginLeft: '5%',
    width: '90%',
    height: '70%',
    marginTop: '10%',
    borderRadius: 20,
  }
})

export default CreateGroup;