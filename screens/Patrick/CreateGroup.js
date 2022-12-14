import {StyleSheet, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import Button from "../../components/CreateGroup/ExitButton";
import PopUp from "../../components/CreateGroup/PopUp";

const CreateGroup = visible => {
  return (
    <View style={styles.newGroupBox}>
      <PopUp
          visible={visible.visible}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  newGroupBox : {
    backgroundColor: "gray",
    marginLeft: '10%',
    marginRight: '10%',
    width: '80%',
    height: '50%',
    marginTop: '25%',
    borderRadius: 20,
  }
})

export default CreateGroup;