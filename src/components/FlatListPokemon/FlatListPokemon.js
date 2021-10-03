// react, react-native
import React from 'react'
import { FlatList } from 'react-native'
import { isFavorite } from '../../services/favoriteService'
// components
import Item from '../Item/Item'

// styles
import style from './stylesFlatListPokemon'

export default function FlatListPokemon({ list, page, loadList }) {
  return (
    <FlatList
      style={style.flatlist}
      data={(list)}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => <Item favorite={false} data={item} page={page} loadList={loadList} />}
    />
  )
}