import { Image, StyleSheet, View, SafeAreaView, FlatList, Text, Button, Pressable, TextInput } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { assets } from '../constants'
import { Polls } from '../constants'
import FlightCard from './FlightCard'
import StartPoll from './StartPoll'
import PollCard from './PollCard'
import { Flights } from '../constants'

const FlightCardsDiscover = () => {

    const renderItem = ({item}) => (
        <FlightCard dates={item.dates}
        flight_length={item.flight_length}
        price={item.price}
        from_to={item.from_to}
        airline={item.airline} />
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

            <Pressable style={styles.button} onPress={()=>{}}>
                <Text style={styles.button_text}>Search</Text>
            </Pressable>
              
              </View>

          </View>

        <SafeAreaView style={styles.flights}>
        <FlatList
                data={Flights}
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
        marginLeft: '3%',
        marginTop : '-20%',
        borderRadius: 25,
        width: '95%',
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
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        height: 25,
        width: 50,
        backgroundColor: '#1B5D29',
        marginTop: '5%',
        marginLeft: '-2%'
 
    },
    button_text : {
        fontSize: 8,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',

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
