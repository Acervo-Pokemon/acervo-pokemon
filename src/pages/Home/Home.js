// react, react-native, expo
import React, { useState, useEffect } from 'react'
import { View, Alert, Text, Keyboard } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'

// components
import Header from '../../components/template/Header'
import SearchBar from '../../components/SearchBar/SearchBar'
import FlatListPokemon from '../../components/FlatListPokemon/FlatListPokemon'
import NavigationBar from '../../components/NavigationBar/NavigationBar'

// control
import { getFirstPage } from '../../control/pokemonControl'

// const
import { limit } from '../../assets/const/const'

// styles
import style from './stylesHome'

export default function Home() {
  const [list, setList] = useState([])
  const [previous, setPrevious] = useState()
  const [next, setNext] = useState()
  const [init, setInit] = useState(true)
  const [search, setSearch] = useState('')
  const [statusSearch, setStatusSearch] = useState('')

  const navigation = useNavigation()

  useEffect(() => {
    handleFirst()
  }, [])

  async function handleFirst() {
    try {
      const response = await getFirstPage(limit)
      setPrevious(response.previous)
      setNext(response.next)
      setList(response.results)
      setInit(false)
      setSearch('')
      setStatusSearch('')
    } catch (error) {
      Alert.alert('Error on handleFirst: ' + error)
    } finally {
      Keyboard.dismiss()
    }
  }

  return (
    <View style={style.base}>
      <StatusBar hidden />

      <Header onPress={() => { navigation.navigate('Favorites') }} />

      <SearchBar
        search={search} setSearch={setSearch}
        setStatusSearch={setStatusSearch}
        setList={setList}
        handleFirst={handleFirst}
      />

      {
        statusSearch !== '' &&
        <View style={style.feedbackSearch}>
          <Text style={style.feedbackSearch}>{statusSearch}</Text>
        </View>
      }

      {
        list.length > 0 &&
        <View style={style.content}>
          <FlatListPokemon list={list} />

          <NavigationBar
            previous={previous} setPrevious={setPrevious}
            next={next} setNext={setNext}
            list={list} setList={setList}
            search={search}
            listLenght={list.length}
            handleFirst={handleFirst}
            init={init}
          />
        </View>
      }
    </View>
  )
}
