import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import DiscoverCard from './DiscoverCard'

const Discover = () => {
  return (
    <View style = {styles.discover}>
      <Text style= {styles.title}> My Travel Groups </Text>
      
      <View style={styles.my_boards}>
        <DiscoverCard />
        <DiscoverCard />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    discover : {
        //flex: 2,
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
        paddingRight : '4%'

    }
})

export default Discover;