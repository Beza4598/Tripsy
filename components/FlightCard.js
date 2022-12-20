import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import StartPoll from './StartPoll'
import { assets } from '../constants'

const FlightCard = ({dates, price, flight_length, from_to, airline}) => {
  return (

      <View style={styles.container}>
        <View style={styles.lateral_position}>
        
          <Text style={styles.main_text}>
            {dates}
          </Text>

        <View>
          <Text style={styles.main_text}>
            {price}
          </Text>

          <Text style={styles.price_info}>
            Estimated (before tax)
          </Text>


          
        </View>
        <Image  source={assets.add} style={styles.logo}/>
        </View>

        <Text style={styles.length}> 
          {flight_length}
        </Text>

        <Text style={styles.price_info}> {from_to}</Text>

        <Image source={airline} style={styles.logo}/>
      </View>
        
  )
}

const styles = StyleSheet.create({
  container : {
      flex: 3,
      backgroundColor: '#FFFFFF',
      paddingTop: '3%',
      paddingBottom: '1%',
      padding: '4%',
      borderRadius: 10,
      width: '99%',
      height: '2%',
      justifyContent: 'center',
      marginTop: '3%',

  },
  lateral_position : {
    flexDirection: 'row', 
    justifyContent: 'space-between'
  }
  ,
  main_text : {
    fontWeight: 'bold',
    fontSize: 9
  },
  length : {
    fontSize: 9,
    fontSize: 4,
    color: 'rgba(0, 0, 0, 0.6)'
  },
  price_info : {
    fontSize: 9,
    fontSize: 5,
    color: 'rgba(0, 0, 0, 0.6)'
  },
  logo : {
    width: 50,
    height: 20,
    resizeMode: 'contain',

  }
  
})


export default FlightCard