import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import MusicPlayer from './component/MusicPlayer'


const App = () => {
  return (
    <View style={styles.container} >
      <StatusBar barStyle='light-content'/>
      <MusicPlayer />
    </View>
  )
}

export default App

let styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
