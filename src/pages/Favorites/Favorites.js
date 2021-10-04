// react, react-native, expo
import React, { useState, useEffect, useCallback } from 'react'
import { View, Alert, Text, Keyboard } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'

// components
import FlatListPokemon from '../../components/FlatListPokemon/FlatListPokemon'

// control
import { getAllFavoriteControl } from '../../control/favoriteControl'

// const
import { limit } from '../../assets/const/const'

// style
import style from './stylesFavorites'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Favorites() {
  const [list, setList] = useState([])

  const navigation = useNavigation()

  async function load() {
    setList( await getAllFavoriteControl());
  }
  useEffect(() => {
    (async function () {
      await load();
    })();
  }, [])

  return (
    <View style={style.base}>
      <StatusBar hidden />
      {
        list.length > 0 &&
        <View style={style.content}>
          <View style={{ width: '100%', justifyContent: 'flex-end' }}>
            <FlatListPokemon list={list} page='Favorites' loadList={load} />
          </View>
        </View>
      }
    </View>
  )
}
