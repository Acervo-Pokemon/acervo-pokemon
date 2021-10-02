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
  const [pokemon, setPokemon] = useState(null)

  const navigation = useNavigation()

  useEffect(() => {
    async function loadPokemon() {
      console.log(url.route.params.url)
      const response = await getDetails(url.route.params.url)
      //console.log(response)
      
      setPokemon(response)
      console.log(pokemon)
      console.log(response.name)
    }
    loadPokemon()
  }, [url])

  //console.log(response)
  //setAbilities(response.abilities)
  //console.log(abilities)
  //console.log(pokemon)
  //setPokemon(response.data)
  //console.log(pokemon)
  //setAbilities(response.abilities)
  //console.log(abilities)
  return (
    <View>
      {/* <FlatList
        style={{}}
        data={(pokemon.abilities)}
        keyExtractor={(item) => item.ability.name}
        renderItem={({ item }) => <Text>{item.ability.name}</Text>
        }
      /> */}
    </View>
  )
}