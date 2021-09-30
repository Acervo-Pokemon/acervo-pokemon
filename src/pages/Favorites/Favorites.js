// react, react-native, expo
import React, { useState, useEffect } from 'react'
import { View, Alert, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { StatusBar } from 'expo-status-bar'

// components
import FlatListPokemon from '../../components/FlatListPokemon/FlatListPokemon'

// control
import { getFirstPage, navigateTo } from '../../control/pokemonControl'

// const
import { limit } from '../../assets/const/const'

// style
import style from './stylesFavorites'

export default function Favorites() {
  const [list, setList] = useState([])
  const [previous, setPrevious] = useState()
  const [next, setNext] = useState()
  const [init, setInit] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    handleFirst()
  }, [])

  async function handleFirst() {
    try {
      const response = await getFirstPage(limit + 2)
      setPrevious(response.previous)
      setNext(response.next)
      setList(response.results)
      setInit(false)
      setSearch('')
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
    <View style={style.base}>
      <StatusBar hidden />
      <View style={{ justifyContent: 'space-around', height: '100%' }}>
        <View style={{ paddingTop: 30 }}>
          <FlatListPokemon list={list} />
        </View>

        <View style={style.content}>
          <View style={style.row}>
            <TouchableOpacity
              onPress={() =>
                init ? handleFirst() : handlePreviousNext(previous)
              }
              disabled={previous === null}
              style={
                previous === null
                  ? style.buttonPreviousNextDisabled
                  : style.buttonPreviousNext
              }
            >
              <Icon name='chevron-left' size={25} color='white' />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => (init ? handleFirst() : handlePreviousNext(next))}
              disabled={next === null}
              style={
                next === null
                  ? style.buttonPreviousNextDisabled
                  : style.buttonPreviousNext
              }
            >
              <Icon name='chevron-right' size={25} color='white' />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}
