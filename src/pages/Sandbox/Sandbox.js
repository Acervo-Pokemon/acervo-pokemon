import React, { useState } from 'react'
import { View, FlatList, Button } from 'react-native'
import Item from '../../components/Item'
import { getPaged } from '../../services/pokemonService'

export default function Sandbox() {

  const [list, setList] = useState([])

  async function handleList() {
    try {
      const response = await getPaged()
      setList(response.results)
    } catch (error) {
      console.log('Error on handleList: ' + error)
    }
  }

  return (
    <View>
      <Button title="Listar" onPress={handleList}></Button>
      <FlatList
        data={(list)} keyExtractor={(item) => item.name}
        renderItem={({ item }) => <Item data={item} />}
      />
    </View>
  )
}