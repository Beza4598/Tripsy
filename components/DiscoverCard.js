import { TouchableOpacity,Image, StyleSheet, View, Text, Dimensions, ImageBackground } from 'react-native'
import React from 'react'
import { assets } from '../constants'

const DiscoverCard = (props) => {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground style={styles.imageStyle} imageStyle={styles.imageStyle} source={assets.turkey}>
        <TouchableOpacity onPress={()=> {}}>
            <Image source={assets.add} style={styles.addButton}/>
        </TouchableOpacity>
        <Image source={assets.person01} style={styles.person1}/>
        <Image source={assets.person02} style={styles.person2}/>
      </ImageBackground>

    <View style={styles.cardInfo}>
      <Text style={styles.cardTitle}> Turkey Weekend </Text>
      <Text style={styles.dates}> Jun 6, 2002 - June 13 2022 </Text>
      <Text style={styles.membersDetail}> {props.memeber_count} 2 Members </Text>
      
      <TouchableOpacity onPress={()=> {}}>
            <Image source={assets.right} style={styles.enter_button} />
        </TouchableOpacity>

    </View>
    </View>
  )
}

const styles = StyleSheet.create (
    {
        cardContainer: {
            width: 125,
            height : 210,
            backgroundColor: '#FFFFFF',
            borderRadius: 25,
            shadowColor: '#000',
            shadowOffset: {
                width: 5,
                height: 5,
            },
            shadowOpacity: 0.10,
            elevation: .5,
        },
        imageStyle : {
            width: 125,
            height: 140,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25
        },
        cardInfo: {
            paddingLeft: 10,
            paddingRight: 10
        },
        cardTitle : {
            paddingTop: 5,
            fontSize: 12,
            fontWeight: 'medium'
        },
        membersDetail : {
            paddingTop: 10,
            fontSize: 7,
            color: 'rgba(0, 0, 0, 0.6)'
        },
        dates: {
            paddingTop: 3,
            fontSize: 7,
            color: 'rgba(0, 0, 0, 0.6)',
            paddingBottom: 4
        },
        addButton: {
            marginTop: 97,
            marginLeft: 83
        },
        person1: {
            width: 30,
            height: 30,
            resizeMode: 'contain',
            marginTop: -30,
            marginLeft: 10
        },
        person2: {
            width: 30,
            height: 30,
            resizeMode: 'contain',
            marginTop: -30,
            marginLeft: 34
        },
        enter_button: {
            marginTop: -22,
            marginLeft: 74
        }
    }
)

export default DiscoverCard