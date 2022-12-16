import {StyleSheet, View, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback,} from "react-native";
import {StatusBar} from "expo-status-bar";
import PopUp from "../../components/CreateGroup/PopUp";
import Contacts from "../../components/CreateGroup/Contacts";
import Submit from "../../components/CreateGroup/Submit"

const CreateGroup = visible => {
  return (
      // from https://reactnative.dev/docs/keyboardavoidingview
  <KeyboardAvoidingView
      behavior={"padding"}
      style={styles.container}
    >

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

    <View style={styles.newGroupBox}>
      <PopUp
          visible={visible.visible}
      />
      <Contacts />
        <Submit />

    </View>
           </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  newGroupBox : {
    backgroundColor: "white",
    marginLeft: '5%',
    width: '90%',
    marginBottom: '10%',
    paddingBottom: '10%',
    borderRadius: 20,
  }
})

export default CreateGroup;