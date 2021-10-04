// react , react native
import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { SvgUri } from 'react-native-svg'

// control
import { handleAbilities, handleTypes, handleStats } from '../../control/detailsControl'

//style
import style from './styleDetails'

export default function Details(props) {

  const pokemon = props.route.params.pokemon
  const [abilities, setAbilities] = useState('')
  const [types, setTypes] = useState()
  const [stats, setStats] = useState([])

  useEffect(() => {
    handleAbilities({ pokemon, setAbilities })
    handleTypes({ pokemon, setTypes })
    handleStats({ pokemon, setStats })
  }, [])

  return (
    <View>
      <Text>Stats:</Text>
      {
        stats.map((item, index) => {
          return (
            <Text key={index}>{item.name} : {item.base_stat}</Text>
          )
        })
      }

      <SvgUri width='10%' height='10%' uri={pokemon.sprites.other.dream_world.front_default} />

      <Text>Nome : </Text>
      <Text>{pokemon.name}</Text>
      <Text>Altura : </Text>
      <Text>{pokemon.height}</Text>
      <Text>Peso : </Text>
      <Text>{pokemon.weight}</Text>
      <Text>Habilidades : </Text>
      <Text>{abilities}</Text>
      <Text>Tipos : </Text>
      <Text>{types}</Text>
    </View>
  )
}
