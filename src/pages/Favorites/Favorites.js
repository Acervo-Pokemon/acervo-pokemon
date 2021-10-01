// react, react-native, expo
import React, { useState, useEffect } from 'react'
import { View, Alert, Text, Keyboard } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'

// components
import FlatListPokemon from '../../components/FlatListPokemon/FlatListPokemon'

// control
import { getFirstPage } from '../../control/pokemonControl'

// const
import { limit } from '../../assets/const/const'

// style
import style from './stylesFavorites'

export default function Favorites() {
  const [list, setList] = useState([])
  const [statusSearch, setStatusSearch] = useState('')

  const navigation = useNavigation()

  useEffect(() => {
    handleFirst()
  }, [])

  async function handleFirst() {
    try {
      const response = await getFirstPage(limit)
      setList(response.results)
    } catch (error) {
      Alert.alert('Error on handleFirst: ' + error)
    } finally {
      Keyboard.dismiss()
    }
  }

  return (
    <View style={style.base}>
      <StatusBar hidden />
      {
        list.length > 0 &&
        <View style={style.content}>
          <View style={{width:'100%',justifyContent: 'flex-end'}}>
            <FlatListPokemon list={list} />
          </View>
        </View>
      }
    </View>
  )
}
