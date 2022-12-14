import { StyleSheet, ScrollView, View, SafeAreaView, Text, Image } from 'react-native'
import React from 'react'

const ContactBox = () => {
  return (
    // <SafeAreaView style = {styles.discover}>

    <View style={styles.contact}>
        <View style={styles.searchField}>
            <Text style={styles.h4}>Search</Text>
        </View>
        <View style = {styles.contactList}>
            <View style={styles.left}>
                <Text style={styles.letter}>A </Text>

                <Text style={styles.h5}>Alejandro </Text>
                {/*<hr></hr>*/}
                <Text style={styles.h5}>Alondra </Text>
                {/*<hr></hr>*/}
                <Text style={styles.h5}>Amy Barns </Text>
                {/*<hr></hr>*/}
                <Text style={styles.h5}>Adrian Grey </Text>
                {/*<hr></hr>*/}
                <View style={styles.letters}>B </View>
                <Text style={styles.h5}>Benjamin </Text>
                {/*<hr></hr>*/}
            </View>
            <View style={styles.right}>
                A B C D E F G H I J K L M N O P Q R S T U V W Z Y Z
            </View>
        </View>
        </View>
  )
}

const styles = StyleSheet.create({
    discover : {
        //flex: 2,
    },
    contact: {
        backgroundColor: '#eee',
        margin: 1,
        padding: 1,
        borderRadius: 0.4
    },
    searchField: {
        borderWidth: 3,
        backgroundColor: '#eee',
        marginBottom: 10,
        borderRadius: 5
    },
    new: {
        backgroundColor: '#eee',
        margin: 1,
        width: '70%'
    },
    contactList: {
        border: 0.5,
        backgroundColor: '#eee',
        padding: 0,
        marginBottom: 10,
        borderRadius: 20,
        width: '100%'
    },
    letters: {
        fontWeight: "bold"
    },
    h4: {
        color: '#000000',
        marginTop: 0,
        marginBottom: 0,
        fontWeight: 15
    },
    h5: {
        color: '#000000',
        fontWeight: 15,
        marginTop: 0,
        marginLeft: 1
    },
    title : {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0A2E36',
        marginBottom: '5%',
        marginLeft: '6%'
    },
    my_boards : {
        //flex : ,
        flexDirection : 'row',
        justifyContent: 'space-around',
        paddingLeft : '4%',
        paddingRight : '4%',

    }
})

export default PopUp;