import {StyleSheet, TextInput, View, TouchableOpacity, Text, Image, Pressable} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// https://github.com/APSL/react-native-keyboard-aware-scroll-view
// https://www.freecodecamp.org/news/how-to-make-your-react-native-app-respond-gracefully-when-the-keyboard-pops-up-7442c1535580/
import React from 'react'

const PopUp = visible => {
  return (
    <View style = {styles.container}>
        <View style={styles.entry}>
              <Text style={styles.h5}>Group Name</Text>
        </View>

        {/*<Form>*/}


        {/*</Form>*/}
          <TextInput style={styles.input} placeholder="Group Name">
              {/*<input type="text" name="groupName" className="datafield"></input>*/}

          </TextInput>

          <TouchableOpacity style={styles.button}>
              <Text style={styles.h4}> Create Group </Text>
          </TouchableOpacity>

    </View>

  )
}

const styles = StyleSheet.create(
    {
        entry: {
            backgroundColor: "white",
            margin: '5%',
        },
        groupName: {
            padding: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
            margin: 10,
            // display: "flex",
            // justifyContent: "center",
        },
        input: {
            backgroundColor: "white",
            marginLeft: '5%',
            marginRight: '5%',
            marginBottom: '5%',
            paddingTop: '3%',
            paddingBottom: '3%',
            paddingLeft: '1%',
            borderRadius: 6,
            borderWidth: 1
        },
        classButton: {
            margin: "auto",
            width: "30%",
            borderRadius: 8,
        },
        h4: {
            color: "white",
            alignSelf: "center"
        },
        h5: {
            color: "black",
        },
        button: {
            margin: "auto",
            width: '40%',
            marginLeft: '30%',
            backgroundColor: '#1B5D29',
            borderRadius: 5,
            padding: 5,
        }
    }
)

export default PopUp;