// react , react native, react native paper
import React, { useState, useEffect } from "react"
import {
  Alert,
  keyboard,
  Image,
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  TextInput,
  FlatList,
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { TouchableOpacity } from "react-native-gesture-handler"
import { useNavigation } from "@react-navigation/native"

//useState, useEffect

//components
import Header from "../../components/template/Header"
import NavigationBar from "../../components/NavigationBar/NavigationBar"

// control
import { getDetails, getFirstPage } from "../../control/pokemonControl"

//datatable
//import { DataTable } from 'react-native-papger'

//style
import style from "./styleDetails"

export default function Details(props) {

  const pokemon = props.route.params.pokemon
  const [abilities, setAbilities] = useState("")
  const [types, setTypes] = useState([])
  const navigation = useNavigation()

  function handleAbilities() {
    let text = ""
    pokemon.abilities.map((item) => {
      setAbilities((text += item.ability.name + ", ").substring(0, text.length - 2))
    })
  }

  function handleTypes() {
    let text = ""
    pokemon.types.map((item) => {
      setTypes((text += item.type.name + ", ").substring(0, text.length - 2))
    })
  }

  function handleStat(item) {
   /*  let validTypes = ['hp', 'attack', 'defense', 'speed']
    let typs = []
    pokemon.stats.map((item) => {
      if (validTypes.includes(item.stat.name)){

      
        setStats((text += item.stat.name + ': ' + item.base_stat + ", ").substring(0, text.length - 2))
    }) */
  }

  useEffect(() => {
    handleAbilities()
    handleTypes()
   /*  handleStats */
  }, [])

  return (
    <View>
      <Text>Nome : </Text>
      <Text>{pokemon.name}</Text>
      <Text>Altura : </Text>
      <Text>{pokemon.height}</Text>
      <Text>Peso : </Text>
      <Text>{pokemon.weight}</Text>
      <Text>Habilidades : </Text>
      <Text>{abilities}</Text>
      <Text>Tipos : </Text>
      <Text>{types}</Text>

      {/* <FlatList
        style={{}}
        data={pokemon.stats}
        keyExtractor={(item) => item.stat.name}
        renderItem={({ item }) => (
          {
            handleStat() !== '' &&
          <Text>{item.ability.name} </Text>
          }
        )}
      /> */}
    </View>
  )
}
