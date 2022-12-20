import { Image, StyleSheet, View, Text, Pressable, TextInput } from 'react-native'
import React from 'react'
import TripBoardCard from './TripBoardCard'
import PollData from './PollData'
import PollDetails from './PollDetails'

const NewPollAll = () => {
    return (
        <View style={styles.big_container}>
          <Text style={styles.title} > New Poll </Text>
          <Text style={styles.subtitle}> Select an item to begin poll.</Text>
  
          <TripBoardCard />
  
          <PollDetails/>

          <Pressable style={styles.submit_button} onPress={()=> {}}>
                <Text style={styles.submit_text}>Submit</Text>
         </Pressable>
  
        </View>
      )
}

const styles = StyleSheet.create({
    big_container: {
      backgroundColor: '#FFFFFF',
      padding: '4%',
      width: '85%',
      marginTop: '12%',
      marginLeft: '7.5%',
      marginRight: '7.%',
      borderRadius: 15,
      height: '93%',
      alignContent: 'center'

    },
    title : {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0A2E36',
        marginBottom: '5%'
    },
    subtitle : {
      flex: 1,
      fontSize: 12,
      color: '#0A2E36',
      marginTop: '-30%'

    },
    submit_button : {
        backgroundColor: '#1B5D29',
        paddingLeft : '8%',
        borderRadius: 20,
        width: '35%',
        marginLeft: '35%',
        marginRight: '50%',
        height: 50,
        marginTop: '10%',
        justifyContent: 'center'

    },
    submit_text : {
        color: 'white',
        fontWeight: 'bold'
    }
    
})


export default NewPollAll