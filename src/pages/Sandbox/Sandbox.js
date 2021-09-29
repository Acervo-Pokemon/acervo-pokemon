import React, { useState } from 'react'
import { View, Button, Alert } from 'react-native'
import FlatListPokemon from '../../components/FlatListPokemon/FlatListPokemon'
import { getFirstPage, navigateTo } from '../../control/pokemonControl'
import style from './stylesSandbox'

export default function Sandbox() {

  const [list, setList] = useState([])
  const [previous, setPrevious] = useState()
  const [next, setNext] = useState()
  const [init, setInit] = useState(true)

  async function handleFirst() {
    try {
      const response = await getFirstPage(6)
      setPrevious(response.previous)
      setNext(response.next)
      setList(response.results)
      setInit(false)
    } catch (error) {
      Alert.alert('Error on getFirstPage: ' + error)
    }
  }

  async function handlePreviousNext(url) {
    if (url === null) {
      return
    }

    try {
      const response = await navigateTo(url)
      setPrevious(response.previous)
      setNext(response.next)
      setList(response.results)
    } catch (error) {
      Alert.alert('Error on getFirstPage: ' + error)
    }
  }

  return (
    <View>
      <View style={style.row}>
        <Button title="Anterior" onPress={() => (init) ? handleFirst() : handlePreviousNext(previous)}></Button>
        <Button title="Listar" onPress={handleFirst}></Button>
        <Button title="Próxima" onPress={() => (init) ? handleFirst() : handlePreviousNext(next)}></Button>
      </View>
      <FlatListPokemon list={list} />
    </View>
  )
}