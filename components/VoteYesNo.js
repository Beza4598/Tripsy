import { View, Image, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { assets } from '../constants'
import { useState } from 'react'

const VoteYesNo = (props) => {
  const [disabled1, setDisabledNo] = useState(false);
  const [disabled2, setDisabledYes] = useState(false);
  
  const onPressYes = () => {
    setDisabledNo(true);
    setDisabledYes(false);
  }

  const onPressNo = () => {
    setDisabledNo(false);
    setDisabledYes(true);
  }

  return (
    <View style={styles.voteButtonContainer}>
      <TouchableOpacity style={{opacity:props.disabled ? 0.2 : 1}} 
                        onPress={onPressYes} 
                        disabled={disabled1}>
        <Image source={assets.voteYes} style={styles.yesButton}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressNo} disabled={disabled2}>
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
        marginTop: 4,
    },
    noButton: {
      marginRight: '28%',
      height: '100%',
      width: '70%',
      resizeMode: 'contain',
      marginTop: 'auto',
    }
  }
)

export default VoteYesNo