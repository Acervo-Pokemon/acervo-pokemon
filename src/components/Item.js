import React from 'react'
import { View, Text } from 'react-native'

export default function Item({ data }) {
  return (
    <View>
      <Text>Nome: {data.name}</Text>
      <Text>Url: {data.url} </Text>
      <Text></Text>
    </View>
  )
}