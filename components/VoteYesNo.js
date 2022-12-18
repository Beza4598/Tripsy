import { View, Image, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { assets } from '../constants'
import { useState } from 'react'


const VoteYesNo = (decision) => {

  // const [disabled1, setDisabledNo] = useState(false);
  // const [disabled2, setDisabledYes] = useState(false);
  //
  // const onPressYes = () => {
  //   setDisabledNo(true);
  //   setDisabledYes(false);
  // }
  //
  // // state = { active: null };
  //
  // const onPressNo = () => {
  //   setDisabledNo(false);
  //   setDisabledYes(true);
  // }

  return (
    <View style={styles.voteButtonContainer}>
      <TouchableOpacity onPress={decision.vote}>
        <Image source={assets.voteYes} style={styles.yesButton}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={decision.vote}>
        <Image source={assets.voteNo} style={styles.noButton}/>
      </TouchableOpacity> 
    </View>
  )
}

const styles = StyleSheet.create (
    {
    voteButtonContainer: {
        width: '100%',
        height : '100%',
        flexDirection:'row',
        justifyContent: 'space-between',
    } ,
    "&:disabled": {
      width: "70%",
      height: "70%",
      opacity: '0.2',
    },
    yesButton: {
        marginLeft: '30%',
        height: '100%',
        width: '70%',
        resizeMode: 'contain',
        marginTop: 'auto',
    },
    noButton: {
      marginRight: '28%',
      height: '100%',
      width: '70%',
      resizeMode: 'contain',
      marginTop: 'auto',
    },
    yesBtnActive: {
      marginLeft: '30%',
      height: '50%',
      width: '50%',
      resizeMode: 'contain',
      marginTop: 'auto',
  },
    noBtnActive: {
      marginRight: '28%',
      height: '50%',
      width: '50%',
      resizeMode: 'contain',
      marginTop: 'auto',
    },
  }
)

export default VoteYesNo