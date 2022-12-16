import {StyleSheet, View} from "react-native";
import DashboardBar from "../../components/DetailedDashboard/DashboardBar.js"


const DashboardPage = polls => {
  return (
    <View style={styles.board}>
        <DashboardBar polls={polls.polls}/>
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