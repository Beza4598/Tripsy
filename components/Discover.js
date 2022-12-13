import { StyleSheet, ScrollView, View, SafeAreaView, Text, Image } from 'react-native'
import React from 'react'
import DiscoverCard from './DiscoverCard'
import AddCard from './AddCard'

const Discover = () => {
  return (
    <SafeAreaView style = {styles.discover}>
      <Text style= {styles.title}> My Travel Groups </Text>
      
      <ScrollView contentContainerStyle={styles.my_boards}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
          <DiscoverCard />
          <DiscoverCard />
          <DiscoverCard />
          <AddCard />
      </ScrollView>

    </SafeAreaView>
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
        paddingRight : '4%',


    }
})

export default Discover;