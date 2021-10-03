// react , react native, react native paper
import React, { useState, useEffect } from 'react'
import { Alert, keyboard, Image, StyleSheet, Button, View, SafeAreaView, Text, TextInput, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

//useState, useEffect


//components
import Header from '../../components/template/Header'
import NavigationBar from '../../components/NavigationBar/NavigationBar'

// control
import { getDetails, getFirstPage } from '../../control/pokemonControl'

//datatable 
//import { DataTable } from 'react-native-paper'

//style 
import style from './styleDetails'

export default function Details(props) {
  console.log(props)
  const pokemon = props.route.params.pokemon
  const navigation = useNavigation()

  return (
    <View>
      <Text style={{ fontSize: 40 }}>{pokemon.name}</Text>
      <FlatList
        style={{}}
        data={(pokemon.abilities)}
        keyExtractor={(item) => item.ability.name}
        renderItem={({ item }) => <Text style={{ fontSize: 20, color: 'red' }}>{item.ability.name}</Text>}
      />
    </View>
  )
}