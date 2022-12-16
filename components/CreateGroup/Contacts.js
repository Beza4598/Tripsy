import { StyleSheet, TextInput, View, Button, Text, Image } from 'react-native'
import React from 'react'

const Contacts = () => {
  return (
        <View style={styles.contact}>
            <View style={styles.searchField}>
                <TextInput style={styles.h4} placeholder={"Search"}></TextInput>
            </View>

            <View style={styles.contactList}>
                <View style={styles.left}>

                    <Text style={styles.h5}>Alejandro </Text>

                    <Text style={styles.h5}>Alondra </Text>

                    <Text style={styles.h5}>Amy Barns </Text>

                    <Text style={styles.h5}>Adrian Grey </Text>

                    <Text style={styles.h5}>Benjamin </Text>

                </View>
                <View style={styles.right}>
                    <Text style={styles.alphabet}>A B C D E F G H I J K L M N O P Q R S T U V W Z Y Z</Text>
                </View>
            </View>

            <View style={styles.invite}>
                  <Text style={styles.invite_text}>Invite Friends to Tripsy</Text>
                  <Text style={styles.h6}>tripsy.join/Bahama-Bash#14</Text>
              </View>

    </View>

  )
}

const styles = StyleSheet.create(
    {
        contact: {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
            borderRadius: 10,
            marginLeft: '5%',
            marginRight: '5%',
            paddingTop: '3%',
            paddingBottom: '2%',
            paddingLeft: '2%',
            paddingRight: '2%'
        },
        searchField: {
            backgroundColor: "white",
            marginBottom: 10,
            borderRadius: 5,
            borderWidth: 0.5,
            padding: '1%',
        },
        contactList: {
            backgroundColor: "white",
            padding: 0,
            marginBottom: 0,
            borderRadius: 10,
            width: '100%',
            borderWidth: 0.5,
            flexDirection: "row"
        },
        h4: {
            color: "black",
            marginTop: 0,
            marginBottom: 0,
            fontWeight: "15",
        },
        h5: {
            color: "black",
            fontWeight: "15",
            marginTop: 0,
            marginLeft: 10,
            marginBottom: 10
        },
        invite: {
            backgroundColor: "#87A58D",
            alignItems: "left",
            width: '70%',
            marginLeft: '15%',
            marginTop: '2%',
            borderRadius: 15,
            paddingLeft: '5%',
            paddingTop: 10,
            paddingBottom: 10
        },
        invite_text: {
            fontSize: 15,
            color: "white"
        },
        left:{
            width: '90%',
        },
        right: {
            width: '1%',
            display: "inline-block",
        },
        alphabet: {
            fontSize: 5,
            color: "#1A86E9"
        },
        h6: {
            marginTop: 1,
            fontSize: 12,
            color: "white"
        }
    }
)

export default Contacts;