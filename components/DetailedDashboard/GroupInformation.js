import {TouchableOpacity, StyleSheet, Dimensions, View, SafeAreaView, Text, Image, FlatList} from 'react-native'
import React from 'react'
import {TripBoardData} from '../../constants/dummy.js'
import Alert from "./Alert";


const GroupInformation = () => {

     const renderItem = ({item, index}) => (
         <Alert message={item[index]['message']} />
     )

     // const alerts = list.map((alert) =>
     //     <li>
     //        key={alert.id} value={alert.message}
     //     </li>
     //     );

    const alerts = TripBoardData.map(items => items.alerts)

      return (

          <View style={styles.information}>
              <View style={styles.heading}>
                <Text style={styles.text}>Group Members: 2</Text>
                </View>
              <View style={styles.heading}>
                <Text style={styles.text}>Location </Text>
                  <Text style={styles.caption}>Still Deciding...</Text>
            </View>
              <View style={styles.heading}>
                <Text style={styles.text}>Flight </Text>
                  <Text style={styles.caption}>Still Deciding...</Text>
            </View>
              <View style={styles.heading}>
                <Text style={styles.text}>Activities </Text>
                  <Text style={styles.caption}>Still Deciding...</Text>
            </View>

        </View>
      )
}

const styles = StyleSheet.create(
    {
        information: {
            backgroundColor: "#E9E2E2",
            marginLeft: '3%',
            marginRight: '3%',
            marginTop: '5%',
            borderRadius: '10%',
            paddingTop: '3%',
            paddingRight: '2%',
            paddingLeft: '2%',
        },
        heading: {
            paddingTop: '2%',
            paddingBottom: '2%',
            paddingLeft: '2%',
            backgroundColor: "white",
            borderRadius: '10%',
            marginBottom: '3%'
        },
        text:{
            fontWeight: "bold",
            fontSize: 12
        },
        caption:{
            marginTop: 10,
            fontSize: 10
        }
    }
)

export default GroupInformation;