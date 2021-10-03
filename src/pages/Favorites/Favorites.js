// react, react-native, expo
import React, { useState, useEffect, useCallback } from 'react'
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
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Favorites() {
  const [list, setList] = useState([])

  const navigation = useNavigation()

  async function load(){
    let favorites = await getAllFavorite();         
    var vet = favorites.map((value)=> {return value})
    setList(vet);
  }  
  useEffect(() => { 
    load();
  }, [])
  
  async function getAllFavorite() {
    let favorites = JSON.parse(await AsyncStorage.getItem("@favorites"));
    console.log(favorites)
    if (favorites == null) {
      return [];
    }
    return favorites;
  }


  return (
    <View style={style.base}>
      <StatusBar hidden />
      {
        list.length > 0 &&
        <View style={style.content}>
          <View style={{width:'100%',justifyContent: 'flex-end'}}>
            <FlatListPokemon list={list} page='Favorites' loadList={load}/>
          </View>
        </View>
      }
    </View>
  )
}
