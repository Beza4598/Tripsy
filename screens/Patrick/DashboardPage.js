import {StyleSheet, View} from "react-native";
import DashboardBar from "../../components/DetailedDashboard/DashboardBar.js"
import AlertNotification from "../../components/DetailedDashboard/AlertNotification";
import GroupInformation from "../../components/DetailedDashboard/GroupInformation"
import React from "react";


const DashboardPage = polls => {
  return (
    <View style={styles.board}>
        <DashboardBar polls={polls.polls}/>

        <AlertNotification/>
      <GroupInformation />

    </View>
  )
}

const styles = StyleSheet.create({
  board: {
    backgroundColor: "white",
    paddingBottom: 10,
    marginTop: '0%',
      height: 500
  }
})

export default DashboardPage;