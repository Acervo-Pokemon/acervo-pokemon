// react, react-native, expo
import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'
// control
import { getDetails, capitalize } from '../../control/pokemonControl'

// style
import style from './stylesItem'
import { useNavigation } from '@react-navigation/native'

export default function Item({ data, favorite }) {
  const [img, setImg] = useState()
  const [pokemon, setPokemon] = useState()
  const navigation = useNavigation()

  useEffect(() => {
    async function loadImg() {
      const details = await getDetails(data.url)
      setPokemon(details)
      setImg(details.sprites.front_default)
    }
    loadImg()
  })

  return (
    <View style={style.toucheable}>
      <TouchableOpacity
        style={{ width: 300, flexDirection: 'row', alignItems: 'center' }}
        onPress={() => navigation.navigate('Details', { pokemon })}
      >
        <Image source={{ uri: img }} style={style.image}></Image>
        <View style={{ width: '75%' }}>
          <Text style={style.text}>{capitalize(data.name)}</Text>
        </View>
      </TouchableOpacity>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ButtonFavorites favorite={favorite}></ButtonFavorites>
      </View>
    </View>
  )
}

function ButtonFavorites({ favorite }) {
  return (
    <View style={{}}>
      <TouchableOpacity
        onPress={() => { console.log('favorites') }}
        style={style.btnFavorites}
      >
        <Icon color={favorite ? '#FFEC14' : 'grey'} size={35} name='star' />
      </TouchableOpacity>
    </View>
  )
}