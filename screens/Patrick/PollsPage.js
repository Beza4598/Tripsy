import {StyleSheet, View} from "react-native";
import PollsBar from "../../components/DetailedDashboard/PollsBar.js"


const DashboardPage = polls => {
  return (
    <View style={styles.board}>
        <PollsBar polls={polls.polls}/>
    </View>
  )
}

const styles = StyleSheet.create({
  board: {
    backgroundColor: "white",
    paddingBottom: 10,
    marginTop: '0%'
  }
})

export default DashboardPage;