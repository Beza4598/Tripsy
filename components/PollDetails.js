import { View, Text, TextInput,StyleSheet} from 'react-native'
import React from 'react'

const PollDetails = () => {

    const [date, onChangeDate] = React.useState("");
    const [description, onChangeDescription] = React.useState("");
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Details</Text>
      <Text style={styles.sub_title}>Expire On:</Text>
      
      <TextInput
        style={styles.input_one}
        onChangeText={onChangeDate}
        value={date}
      />
    
    <Text style={styles.sub_title} >Description</Text>

    <TextInput
        style={styles.input_two}
        onChangeText={onChangeDescription}
        value={description}
      />


    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#F1F1F1',
        padding: '5%',
        marginLeft: '3%',
        marginTop : '5%',
        borderRadius: 25,
        width: '95%',
        height: '30%',
        justifyContent: 'center'
        
    },
    title : {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0A2E36',
        marginBottom: '4%'

    },
    sub_title : {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#0A2E36',
        marginTop: '2%'

    }
    ,input_one: {
        height: '10%',
        width:  '100%',
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
        marginTop: '3%'
      },
      input_two: {
        height: '40%',
        width:  '100%',
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
        marginTop: '3%'

      }
});

export default PollDetails