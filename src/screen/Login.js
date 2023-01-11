import { StyleSheet, Text, View,Image, TextInput } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View style={styles.container}>
      <Image
      source={require("../../assets/image/logo.png")}
      style={styles.logoImage}
      />
      <Text style={styles.loginText}>Login</Text>

<View style={styles.innercontainer}>
  <Image source={require('../../assets/image/@logo.png')}
  style={{height:20,width:20}}
  />
  <TextInput
  placeholder='Enter email'
  />
</View>



    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
  },
  logoImage:{height:100,width:100,resizeMode:'contain',marginTop:160},
  loginText:{
    fontSize:21,
    fontWeight:"700",
    marginTop:48,
    lineHeight:32

  },
  innercontainer:{
    flexDirection:'row',
    alignItems:'center'
  }
})