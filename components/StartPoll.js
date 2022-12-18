import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import {SelectList} from 'react-native-dropdown-select-list'
import React from 'react'
import { assets } from '../constants';

const StartPoll = () => {

    const  [selected, setSelected] = useState("");

    const length = [
      {key: '1', value: 'one-week'},
      {key: '2', value: 'one-month'},
      {key: '3', value: 'two-months'}
    ];

    const trip = [
        {key: '1', value: 'Boating trip'},
        {key: '2', value: 'Turkey trip'},
        {key: '3', value: 'Paris-weekend'}
      ];

  return (
    <View style={styles.container}>
      
      <Text style={styles.main_text}> Start  a Poll?  
       </Text>
      
      <View style={styles.lateral_position}>
        <Text style={styles.price_info}>Expire In:</Text>
        
        <SelectList
            data={length}
            setSelected={setSelected}
            boxStyles={styles.input}
        />

      </View>

      <View style={styles.lateral_position}>
        <Text style={styles.price_info}>Group:    </Text>
        
        <SelectList
            data={trip}
            setSelected={setSelected}
            boxStyles={styles.input}
        />
        
      </View>

      <TouchableOpacity onPress={()=> {}}>
                <Image style={styles.button_image} source={assets.create_poll} />
     </TouchableOpacity>    

    </View>
  )
}


const styles = StyleSheet.create({
    container : {
        flexDirection: 'column',
        paddingTop: '3%',
        paddingBottom: '1%',
        padding: '4%',
        width: '50%',
        height: '70%',
        marginTop: '3%',
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 4
    },
    input : {
        height: 10,
        width:  '20%',
        marginTop: -2,
        marginBottom: 2,
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderColor: 'black',
        borderWidth: 1

    },
    lateral_position : {
      flexDirection: 'row'
    }
    ,
    main_text : {
      fontWeight: 'bold',
      fontSize: 14,
      marginBottom: '5%'
    },
    length : {
      fontSize: 9,
      fontSize: 4,
      color: 'rgba(0, 0, 0, 0.6)'
    },
    price_info : {
      fontSize: 9,
      color: 'rgba(0, 0, 0, 0.6)'
    },
    button_image : {
      width: 30,
      height: 30,
      marginLeft: '40%',
      resizeMode: 'contain',
  
    }
    
  })

export default StartPoll;