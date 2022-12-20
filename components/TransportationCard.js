import { Image, StyleSheet, View, Text, Button, Pressable, TextInput } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { assets } from '../constants'
import { useState } from 'react'

const TripBoardCard = () => {
  const [inputOne, onChangeInputOne] = useState("From");
  const [inputTwo, onChangeInputTwo] = useState("To");

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
        <View style={styles.trip_buttons}>
            <Pressable style={styles.button} onPress={()=> {}}>
                <Text style={styles.button_text}>One-way</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={()=> {}}>
                <Text style={styles.button_text}>Round-trip</Text>
            </Pressable>

            
            <Pressable style={styles.button} onPress={()=> {}}>
                <Text style={styles.button_text}>Multi-city</Text>
            </Pressable>

            </View>

            <View
                style={styles.separator}
            />

        <View style = {styles.location}>
            
                <TextInput
                        style={styles.input}
                        onChangeText={(e) => {onChangeInputTwo}}
                        value={inputOne}
                />

                <Image style={styles.directions} source={assets.directions} />

                <TextInput
                        style={styles.input}
                        onChangeText={(e) => {onChangeInputTwo}}
                        value={inputTwo}
                />
            
            </View>

            <View style={styles.dates}>

            </View>

            <Pressable style={styles.submit_button} onPress={()=> {}}>
                <Text style={styles.submit_text}>Submit</Text>
            </Pressable>
        </View>
      
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
    section_two: {
        flex: 4,
        backgroundColor: '#FFFFFF',
        padding: '5%',
        borderRadius: 20,

    },
    separator : { 
        marginTop: '3%',
        marginBottom: '4%',
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        
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
        backgroundColor: '#F1F1F1'
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
    },
    submit_button : {
        backgroundColor: '#1B5D29',
        paddingLeft : '8%',
        borderRadius: 6,
        width: '35%',
        marginLeft: '35%',
        marginRight: '50%',
        height: 35,
        marginTop: '10%',
        justifyContent: 'center'

    },
    submit_text : {
        color: 'white'
    }
})


export default TripBoardCard;