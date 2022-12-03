import { StyleSheet, View, SafeArea, FlatList, Text } from 'react-native';
import Discover from '../components/Discover';
import HomeHeader from '../components/HomeHeader';
import { StatusBar } from 'expo-status-bar';
import TripBoardCard from '../components/TripBoardCard';

function Home() {
  return (
  <View style={ styles.container}>
   <StatusBar/>

   <View style={styles.header}>
    <HomeHeader name='Josh'/>
   </View>
   
   <View style={styles.my_boards}>
      <Discover />
   </View>

   <View style={styles.planning_dashboard}>
      <TripBoardCard/>
   </View>

  </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
  },
  my_boards : {
      flex : 2,
  }, 
  header : {
      flex : 1,
  },
  planning_dashboard : {
    flex : 2
  }
  
})

export default Home;