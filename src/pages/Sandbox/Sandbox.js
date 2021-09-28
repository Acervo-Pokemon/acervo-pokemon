import React, { useState } from 'react'
import { View, FlatList, Button, Alert } from 'react-native'
import Item from '../../components/Item'
import { getFirstPage, navigateTo } from '../../control/pokemonControl'

export default function Sandbox() {

  const [list, setList] = useState([])
  const [previous, setPrevious] = useState()
  const [next, setNext] = useState()
  const [init, setInit] = useState(true)

  async function handleFirst() {
    try {
      const response = await getFirstPage()
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
      <Button title="Listar" onPress={handleFirst}></Button>
      <Button title="Anterior" onPress={() => (init) ? handleFirst() : handlePreviousNext(previous)}></Button>
      <Button title="Próxima" onPress={() => (init) ? handleFirst() : handlePreviousNext(next)}></Button>
      <FlatList
        data={(list)} keyExtractor={(item) => item.name}
        renderItem={({ item }) => <Item data={item} />}
      />
    </View>
  )
}