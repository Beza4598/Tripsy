import { View, Image, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { assets } from '../constants'
import Modal from "react-native-modal";

const AddCard = (visible) => {
  return (
    <View style={styles.cardContainer}>
        <TouchableOpacity onPress={() => props.navigation.navigate('GroupDashboard')}>
      {/*<TouchableOpacity onPress={visible.visible}>*/}
        {/*<Image source={assets.add} style={styles.addButton}/>*/}
      </TouchableOpacity>

    </View>

  )
}

const styles = StyleSheet.create (
  {
      cardContainer: {
          width: 125,
          height : 210,
          backgroundColor: '#F1F1F1',
          borderRadius: 25,
          shadowColor: '#000',
          shadowOffset: {
              width: 5,
              height: 5,
          }
        } ,
        addButton: {
          marginTop: 97,
          marginLeft: 45
      }
  }
)

export default AddCard