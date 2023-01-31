import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import List from './src/screen/List'
import { StatusBar } from 'expo-status-bar'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
     <List/>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,

  }
})