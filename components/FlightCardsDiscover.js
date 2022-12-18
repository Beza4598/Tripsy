import { Image, StyleSheet, View, SafeAreaView, FlatList, Text, Button, Pressable, TextInput } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { assets } from '../constants'
import { Polls } from '../constants'
import FlightCard from './FlightCard'
import StartPoll from './StartPoll'
import PollCard from './PollCard'

const FlightCardsDiscover = () => {

    const renderItem = ({item}) => (
        <PollCard group_name= {item.group_name} category={item.category} end_time= {item.end_time} user={item.user} user_image={item.user_image} />
      );

    
    return (
      <View style={styles.container}>
  
          <Text style={styles.title}> Discover </Text>
  
          <View style={styles.choice_buttons}>
              <TouchableOpacity onPress={()=> {}}>
                  <Image style={styles.button_image} source={assets.plane} />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> {}}>
                  <Image style={styles.button_image} source={assets.beach} />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> {}}>
                  <Image style={styles.button_image} source={assets.car} />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> {}}>
                  <Image style={styles.button_image} source={assets.hotel} />
              </TouchableOpacity>
          </View>
  
          <View style={styles.section_two}>
  
          <View style = {styles.location}>
              
                  <TextInput
                          style={styles.input}
                          value='Newark (EWR)'
                  />
  
                  <Image style={styles.directions} source={assets.directions} />
  
                  <TextInput
                          style={styles.input}
                          value='Los An (LAX)'
                  />
              
              </View>
              
          </View>

        <SafeAreaView style={styles.flights}>
        <FlatList
                data={Polls}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />

        </SafeAreaView>
        
      </View>
    )
  }

const styles = StyleSheet.create({
    container : {
        flex: 3,
        backgroundColor: '#F1F1F1',
        padding: '5%',
        marginLeft: '5%',
        marginTop : '-12%',
        borderRadius: 25,
        width: '85%',
        justifyContent: 'center'
    },
    flights : {
        flex: 4,
        backgroundColor: '#F1F1F1',
    }
    ,
    section_two: {
        flex: 1,
        borderRadius: 20,
        marginTop: '-5%',
        marginLeft: '-3%'

    },
    choice_buttons : {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        padding: '5%',
        justifyContent: 'space-around',
        borderRadius: 20,
        marginBottom: '5%',
        marginTop: '-10%'
    },
    title : {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0A2E36',
        marginBottom: '5%'

    },
    my_boards : {
        flexDirection : 'column',
    },
    button :{
        borderRadius: 10,
        backgroundColor: '#F1F1F1',
        padding: '4%'
    },
    button_text : {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#313131',

    },
    trip_buttons : {
        flexDirection : 'row',
        justifyContent: 'space-between'
    },
    input: {
        height: 28,
        width:  '30%',
        margin: 12,
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderColor: 'black',
        borderWidth: 1
      },
    location : {
        alignContent: 'left',
        flexDirection: 'row',
    }, 
    button_image: {
        width : 50,
        height: 50
    },
    directions : {
        width: 15,
        height: 15,
        color: 'black',
        marginTop: '7%'
    }
})

export default FlightCardsDiscover;
