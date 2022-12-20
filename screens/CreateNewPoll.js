import { View, Text } from 'react-native'
import React from 'react'
import NewPollFlights from '../components/NewPollFlights'
import NewPollAll from '../components/NewPollAll'

const CreateNewPoll = (poll) => {
  return (
    <View>
      <NewPollFlights poll={poll.poll} />
    </View>
  )
}

export default CreateNewPoll