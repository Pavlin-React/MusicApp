import React from 'react'
import { 
  View,
  Dimensions,
  StyleSheet,
  SafeAreaView, 
  TouchableOpacity,
  Image,
  Text,
  } from 'react-native'
import Slider from '@react-native-community/slider'
import Ionicons from 'react-native-vector-icons/Ionicons'

let {width, height} = Dimensions.get('window')

const MusicPlayer = () => {
 return (
  <SafeAreaView style={styles.container}>
    <View style={styles.mainContainer}>
      <View style={styles.artworkWrapper}>
        <Image
          style={styles.artworkImg}
          source={require('../assets/artwork/img-1.jpg')} />
      </View>
      <View>
        <Text style={styles.title}>
          Song Title
        </Text>
        <Text style={styles.artist}>
          Song Artist
        </Text>
        <Slider/>
      </View>
    </View>
    <View style={styles.bottomContainer} >
     <View style={styles.bottomControls}>
     <TouchableOpacity>
      <Ionicons name='heart-outline' size={30} color='#777777'/> 
     </TouchableOpacity>
     <TouchableOpacity>
      <Ionicons name='repeat' size={30} color='#777777'/> 
     </TouchableOpacity>
     <TouchableOpacity>
      <Ionicons name='share-outline' size={30} color='#777777'/> 
     </TouchableOpacity>
     <TouchableOpacity>
      <Ionicons name='ellipsis-horizontal' size={30} color='#777777'/> 
     </TouchableOpacity>
     </View>

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
 },
 bottomContainer: {
  borderTopColor: '#393e46',
  borderTopWidth: 1,
  width: width,
  alignItems: 'center',
  paddingVertical: 15,
  },
  bottomControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%'
  },
  artworkWrapper: {
    width: 300,
    height: 340,
    marginBottom: 25,
    shadowColor: '#ccc',
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84
  },
  artworkImg: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  title: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center'
  },
  artist: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '200',
    textAlign: 'center'
  }
})


