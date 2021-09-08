import React, {useState, useRef, useEffect} from 'react'
import { 
  View,
  Dimensions,
  StyleSheet,
  SafeAreaView, 
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  Animated
  } from 'react-native'
import songs from '../model/Data'
import Slider from '@react-native-community/slider'
import Ionicons from 'react-native-vector-icons/Ionicons'

let {width, height} = Dimensions.get('window')

const MusicPlayer = () => {

  let scrollX = useRef(new Animated.Value(0)).current
  let [songIndex, setSongIndex] = useState(0)

  useEffect(() => {
    scrollX.addListener(({value}) => {
      console.log('scrollX', scrollX);
      console.log('Device width', width);
      let index = Math.round( value / width)
      setSongIndex(index)
      console.log('Index', index);
    })
  }, [])

  let renderSongs = ({item, index}) => {
    return (
      <Animated.View
        style={{
          width: width,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <View style={styles.artworkWrapper}>
          <Image
            style={styles.artworkImg}
            source={item.image} />
        </View>
      </Animated.View>
    )
  }
 return (
  <SafeAreaView style={styles.container}>
    <View style={styles.mainContainer}>
      <Animated.FlatList
        data={songs}
        renderItem={renderSongs}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {
            contentOffset: {
              x: scrollX
            }
          }}],
          {useNativeDriver: true}
        )}
      />

      <View>
        <Text style={styles.title}>
          {songs[songIndex].title}
        </Text>
        <Text style={styles.artist}>
          {songs[songIndex].artist}
        </Text>
        <View>
          <Slider
            value= {10}
            minimumValue= {0}
            maximumValue= {100}
            style={styles.progressContainer}
            thumbTintColor= '#fff369'
            minimumTrackTintColor= '#fff369'
            maximumTrackTintColor= '#fff'
            onSlidingComplete={() => {}}
          />
          <View style={styles.progressLabelContainer}>
            <Text style={styles.progressLabelText}>
              0:00
            </Text>
            <Text style={styles.progressLabelText}>
              3:56
            </Text>
          </View>
        </View>
          <View style={styles.musicControls}>
            <TouchableOpacity>
              <Ionicons name='play-skip-back-outline' size={35} color='#fff369' style={{marginTop:20}}/> 
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name='ios-pause-circle' size={75} color='#fff369'/> 
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name='play-skip-forward-outline' size={35} color='#fff369' style={{marginTop:20}}/> 
            </TouchableOpacity>
          </View>
        
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
  },
  progressContainer: {
    width: 350,
    height: 40,
    flexDirection: 'row',
    marginTop: 25
  },
  progressLabelContainer: {
    width: 340,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  progressLabelText: {
    color: '#fff'
  },
  musicControls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  }
})
