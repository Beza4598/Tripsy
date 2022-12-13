import { View, Image, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { assets } from '../constants'

const AddCard = () => {
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity onPress={()=> {}}>
        <Image source={assets.add} style={styles.addButton}/>
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