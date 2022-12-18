import { View, Text, Image, StyleSheet} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const PollCard = ({group_name, category, end_time, user, user_image}) => {
  
    return (
        <View style={styles.container}>
        <View style={styles.lateral_position}>
          <View>
            <View>
            `   <Image source ={user_image} />
                <Text> {user} </Text>
            </View>
            <Text style={styles.main_text}>
                {group_name}
            </Text>

          </View>

        <View>
          <TouchableOpacity>
            <Image source={assets.enter} style={button}/>
          </TouchableOpacity>

          <Text style={styles.price_info}>
            Voting Ends in
            <View>
                {end_time}
            </View>
          </Text>
        </View>

        </View>

        <Text style={styles.length}> 
          Category: {category}
        </Text>

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
        width: '90%',
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

export default PollCard