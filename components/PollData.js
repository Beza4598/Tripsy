import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native'
import React from 'react'
import { assets } from '../constants'

const PollData = (props) => {
  return (
    <SafeAreaView style = {styles.discover}>
        <View style={styles.pollContainer}>
            <Text style={styles.infoTitle}> Date</Text>
            <View style={styles.infoContainer}>
                <Text style={styles.info}> 11/11/2022</Text>
            </View>
            <Text style={styles.infoTitle}> Time</Text>
            <View style={styles.infoContainer}>
                <Text style={styles.info}> 2:22</Text>
            </View>
            <Text style={styles.infoTitle}> Location</Text>
            <View style={styles.infoContainer}>
                <Text style={styles.info}> Paris, France</Text>
            </View>
            <Text style={styles.infoTitle}> Description</Text>
            <View style={styles.descriptionContainer}>
                <Text style={styles.info}> This is a really cool cafe in the area! We can
                    stop by before the museum and get brunch :D If we have time maybe
                    we can walk around after. </Text>
            </View>
        </View>
        <View style={styles.userInfo}>
            <Image source={assets.person01} style={styles.user}/>
            <Text style={styles.userName}>{props.name}</Text>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
        discover:{
            alignItems: 'center', 
            height : '100%',
        } ,
        pollContainer: {
            width: '95%',
            height : '86%',
            backgroundColor: '#F5F5F5',
            borderRadius: 15
        } ,
        infoTitle: {
            fontSize: 13,
            fontWeight: 'bold',
            color: '#0A2E36',
            paddingLeft: '2%',
            paddingTop: '5%'
        } ,
        infoContainer: {
            width: '95%',
            height : 22,
            backgroundColor: '#FFFFFF',
            marginTop: '1%',
            marginLeft: '2.5%',
            borderRadius: 5,
            justifyContent: 'center',
            paddingLeft: '2%'

        },
        info:{
            fontSize: 13,
            color: '#0A2E36',
        },
        descriptionContainer: {
            width: '95%',
            height : '43%',
            marginLeft: '2.5%',
            backgroundColor: '#FFFFFF',
            marginTop: '1%',
            borderRadius: 5,
            paddingTop: '1%',
            paddingLeft: '3%',
        } ,
        text: {
            marginTop: 97,
            marginLeft: 45
        } ,
        title : {
            flex: 1,
            fontSize: 20,
            fontWeight: 'bold',
            color: '#0A2E36',
            marginBottom: '5%'
        },
        user:{
            width: 30,
            height: 30,
            resizeMode: 'contain',
            flex: '1',
            position: 'relative',
            bottom: 0,
            left: '100%'
        },
        userName:{
            fontSize: 17,
            flex: '1',
            position: 'absolute',
            width:'100%',
            bottom: 0,
            left: '65%',
            marginBottom: 3
        },
        userInfo:{
            flexDirection: 'row',
            marginTop: 10,
            marginLeft: 'auto',
            alignItems: 'center',
            justifyContent: 'space-evenly'
        }
})

export default PollData