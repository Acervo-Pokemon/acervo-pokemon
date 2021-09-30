// react, react-native
import React from 'react'
import { FlatList } from 'react-native'

// components
import Item from '../Item/Item'

// styles
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