import {TouchableOpacity, StyleSheet, Dimensions, View, SafeAreaView, Text, Image, FlatList} from 'react-native'
import React from 'react'
import {TripBoardData} from '../../constants/dummy.js'
import Alert from "./Alert";


const AlertNotification = () => {

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

          <View style={styles.alert}>
            <Text style={styles.text}>Alerts </Text>

            <FlatList
                data={alerts}
                renderItem={renderItem}
                // keyExtractor={(item => item.message)}
            />

        </View>
      )
}

const styles = StyleSheet.create(
    {
        alert: {
            backgroundColor: "#E9E2E2",
            marginLeft: '3%',
            marginRight: '3%',
            marginTop: '5%',
            borderRadius: '10%',
            paddingTop: '2%',
            paddingBottom: '2%',
            paddingRight: '2%',
            paddingLeft: '2%',
        },
        text:{
            fontWeight: "bold",
            fontSize: 20
        }
    }
)

export default AlertNotification;