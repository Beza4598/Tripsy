import { StyleSheet, Pressable, View, Button, Text, Image } from 'react-native'
import React from 'react'

const PopUp = visible => {
  return (
    <View style = {styles.container}>
        <View className="entry">
              <h4>Group Name</h4>
          </View>

          <form onSubmit={}>
              <div className="groupName">
                  <input type="text" name="groupName" className="datafield"></input>
              </div>
              <div className="classButton">
                  <input type="submit" className="button" value="Create Group"></input>
              </div>

          </Form>

    </View>

  )
}

const styles = StyleSheet.create(
    {
        discover : {
            paddingLeft: 5,
            paddingBottom: 3,
            borderRadius: 20,
            alignItems: 'left',
        },
        right:{
            // backgroundColor: "black",
            paddingLeft: '90%',
            width: '100%',
            marginTop: 5,
        },
        exit:{
            backgroundColor: "#F65151",
            height: 20,
            width: 20,
            borderRadius: 20,
            marginTop: 10,
        },
        new: {
            paddingLeft: 15,
            marginTop: 15,
            marginBottom: 15,
        },
        entry: {
            width: '100%',
            paddingLeft: 15,
            marginBottom: 15,
        },
        h4: {
            color: '#000000',
            marginTop: 0,
            fontWeight: "15",
        },
        h5: {
            color: '#000000',
            fontWeight: "15",
            marginBottom: 50,
            marginTop: 0,
            marginLeft: 1
        },
        title : {
            fontSize: 20,
            fontWeight: "10",
            color: '#0A2E36',
        }
    }
)

export default PopUp;