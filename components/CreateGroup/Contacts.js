import { StyleSheet, Pressable, View, Button, Text, Image } from 'react-native'
import React from 'react'

const Contacts = () => {
  return (
        <View style={styles.contact}>
            <View style={styles.searchField}>
                <Text style={styles.h4}>Search</Text>
            </View>
            <View style={styles.contactList}>
                <View style={styles.left}>

                    <Text style={styles.h5}>Alejandro </Text>

                    <Text style={styles.h5}>Alondra </Text>

                    <Text style={styles.h5}>Amy Barns </Text>

                    <Text style={styles.h5}>Adrian Grey </Text>

                    <Text style={styles.h5}>Benjamin </Text>

                </View>
                <Text style={styles.right}>
                    A B C D E F G H I J K L M N O P Q R S T U V W Z Y Z
                </Text>
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
            margin: 10,
            padding: 10,
            borderRadius: 15,
        },
        searchField: {
            backgroundColor: "white",
            marginBottom: 10,
            borderRadius: 8,
        },
        contactList: {
            backgroundColor: "white",
            padding: 0,
            marginBottom: 10,
            borderRadius: 15,
            width: '100%'
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
            marginLeft: 10
        },
        invite: {
            backgroundColor: "#87A58D",
            alignItems: "center",
            margin: "auto",
            width: '60%',
            borderRadius: 15,
            paddingLeft: 10,
            paddingTop: 10,
            paddingBottom: 30
        },
        invite_text: {
            fontSize: 15,
            color: "white"
        },
        h6: {
            marginTop: 20,
            fontSize: 12,
            color: "white"
        }
    }
)

export default Contacts;