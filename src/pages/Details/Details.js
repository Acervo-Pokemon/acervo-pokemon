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
import { DataTable } from 'react-native-paper'

//style 
import style from './styleDetails'

export default function Details(url) {
  const obj = {
    name: '',
    height: 0,
    weight: 0,
    abilities: [{
      ability: {
        name: ''
      }
    }],
    types: [],
    image: '',
    stats: {
      hp: 0,
      attack: 0,
      defense: 0,
      speed: 0
    }
  }

  const [pokemon, setPokemon] = useState({ obj })

  const navigation = useNavigation()

  useEffect(() => {
    async function loadPokemon() {
      const response = await getDetails(url.route.params.url)
      setPokemon(response)
    }
    loadPokemon()
  }, [])

  return (
    <View>
      <Text style={{ fontSize: 40 }}>{pokemon.name}</Text>
      <FlatList
        style={{ fontSize: 20, color: 'red' }}
        data={(pokemon.abilities)}
        keyExtractor={(item) => item.ability.name}
        renderItem={({ item }) => <Text>{item.ability.name}</Text>}
      />
    </View>
  )
}