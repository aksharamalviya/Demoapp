import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { useEffect } from 'react';
import { CallList } from '../helper/service';
import { useState } from 'react';

const List = () => {
  const [data, setData] = useState()

  useEffect(() => {
    GetData()
  }, [])

  const GetData = async () => {
    const finalData = await CallList()
    setData(finalData)

  }
  const _renderItem = ({ item, index }) => {
    return (
      <View style={styles.cardView} >
        <Text>
         Name :  {item.name}
        </Text>
        <Text>
         UserName :  {item.username}
        </Text>
        <Text>
         Email :  {item.email}
        </Text>
        <Text>
         Address : {item.address.street} {item.address.street} 
        </Text>
        <Text>
         City : {item.address.city}  ({item.address.zipcode}) 
        </Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={{height:50,width:'100%',justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:18,fontWeight:"700"}} >List of Users</Text>


      </View>
      <FlatList
      showsVerticalScrollIndicator={false}
        data={data}
        renderItem={_renderItem}
      />
    </View>
  )
}

export default List

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: 40,
    padding:5
  }
  ,
  cardView: {
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
    padding:5
  }
})