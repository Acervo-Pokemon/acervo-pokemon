// react, react-native, styles  
import React from 'react'
import { TouchableOpacity } from 'react-native'
import style from './stylesBtnTopLeft'

// components
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function BtnTopLeft({ color, onPress }) {
  return (
    <TouchableOpacity style={style.toucheable} onPress={onPress} >
      <Icon name={'arrow-back-ios'}
        size={30}
        style={{ color: color }} />
    </TouchableOpacity>
  )
}