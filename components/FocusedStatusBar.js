import { View, Text } from 'react-native'
import React from 'react'

const FocusedStatusBar = () => {
  return (
    <View>
      <Text>FocusedStatusBar</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    discover : {
        flex: 3,
    },
    title : {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#0A2E36',
        marginBottom: '5%'

    },
    my_boards : {
        flexDirection : 'column',
    }
})


export default FocusedStatusBar