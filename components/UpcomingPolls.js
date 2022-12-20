import { View, Text, StyleSheet , SafeAreaView, FlatList} from 'react-native'
import React from 'react'
import PollCard from './PollCard';
import { Polls } from '../constants';

const UpcomingPolls = () => {
    const renderItem = ({item}) => (
        <PollCard group_name={item.group_name}
        category={item.activity}
        end_time={item.end_time}
        user={item.user} 
        user_image={item.user_image} />
      );

    
    return (
      <View style={styles.container}>
  
        <Text style={styles.title}> Upcoming Polls </Text>
  
        <SafeAreaView style={styles.polls}>
        <FlatList
                data={Polls}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />

        </SafeAreaView>
        
      </View>
    )
  }

  const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#F1F1F1',
        padding: '5%',
        marginLeft: '3%',
        marginTop : '-10%',
        borderRadius: 25,
        width: '95%',
        justifyContent: 'center'
    },
    polls : {
        flex: 8,
        backgroundColor: '#F1F1F1',
    },
    title : {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0A2E36',

    },
    button_image: {
        width : 50,
        height: 50
    }
})


export default UpcomingPolls