import React from 'react'
import { FlatList } from 'react-native'
import Item from '../Item/Item'
import style from './stylesFlatListPokemon'

export default function FlatListPokemon({ list }) {
  return (
    <FlatList 
      style={style.flatlist}
      data={(list)}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => <Item data={item} />}
    />
  )
}