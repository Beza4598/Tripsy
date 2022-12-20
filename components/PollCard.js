import { View, Text, Image, StyleSheet} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { assets } from '../constants'

const PollCard = ({group_name, category, end_time, user, user_image}) => {
  
    return (
        <View style={styles.container}>

        <View style={styles.lateral_position}>
          <View>
            
            <View style={styles.lateral_position}>
               <Image source={user_image} style={styles.profile_pic}/>
               <Text style={styles.price_info}>{user}</Text>
            </View>

            <Text style={styles.main_text}> {group_name}  </Text>

          </View>

        <View>

          <TouchableOpacity>
            <Image source={assets.right} style={styles.enter_button}/>
          </TouchableOpacity>
        
         
        </View>

        </View>


        <View style={styles.lateral_position}>
          <Text style={styles.length}> Category: {category} </Text>
          <View>
            <Text style={styles.price_info}> Voting Ends in </Text>
            <Text style={styles.end_time}> {end_time} </Text>
          </View>
        </View>
      </View>
        
  )
}

const styles = StyleSheet.create({
    container : {
        flex: 3,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: '5%',
        width: '100%',
        height: '2%',
        justifyContent: 'center',
        marginTop: '3%',
  
    },
    voting: {
      maringLeft: '40%'
    },
    lateral_position : {
      flexDirection: 'row', 
      justifyContent: 'space-between'
    },
    main_text : {
      fontWeight: 'bold',
      fontSize: 9,
      marginBottom: '20%'
    },
    length : {
      fontSize: 9,
      color: 'rgba(0, 0, 0, 0.6)'
    },
    end_time : {
      fontSize: 10,
      color: 'Yellow'
    },
    price_info : {
      fontSize: 10,
      color: 'rgba(0, 0, 0, 0.6)'
    },
    logo : {
      width: 50,
      height: 20,
      resizeMode: 'contain',
  
    },
    enter_button: {
        marginLeft: '55%',
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    profile_pic :  {
      width: 20,
      height: 20,
      resizeMode: 'contain'
    }
    
})

export default PollCard