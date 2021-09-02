import React from 'react'
import { View, Dimensions, StyleSheet, SafeAreaView} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

let {width, height} = Dimensions.get('window')

const MusicPlayer = () => {
 return (
  <SafeAreaView style={styles.container}>
   <View style={styles.mainContainer}>
  </View>
    <View style={{
     borderTopColor: '#393e46',
     borderTopWidth: 1,
     width: width,
     alignSelf: 'center',
     paddingVertical: 15,
     }} >
     <Ionicons name='heart-outline' size={30} color='#777777'/> 
    </View>
  </SafeAreaView>
 )
}

export default MusicPlayer

let styles = StyleSheet.create({
 mainContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
 },
 container: {
  flex: 1,
  backgroundColor: '#222831'
 }
})


