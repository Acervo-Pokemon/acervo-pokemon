import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { getDetails, capitalize } from '../../control/pokemonControl'
import style from './stylesItem'
import styles from '../../assets/css/styles'
import { useNavigation } from '@react-navigation/native'

export default function Item({ data }) {

  const [img, setImg] = useState()
  const navigation = useNavigation()
  
  useEffect(() => {
    async function loadImg() {

      const details = await getDetails(data.url)
      setImg(details.sprites.front_default)
    }
    loadImg()
  })

  return (
    <View>
      <TouchableOpacity 
        style={[style.toucheable, styles.shadowDefault]}
        onPress={() => navigation.navigate('Detalhes')}>
        <Image source={{ uri: img }} style={style.image}></Image>
        <Text style={style.text}>{capitalize(data.name)}</Text>
      </TouchableOpacity>
    </View>
  )
}