// react, react-native
import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

// control
import { navigateTo } from '../../control/pokemonControl'

// styles
import style from './styleNavigationBar'
import { row, colors } from '../../assets/css/styles'

export default function NavigationBar(props) {

  async function handlePreviousNext(url) {
    if (url === null) {
      return
    }

    try {
      const response = await navigateTo(url)
      props.setPrevious(response.previous)
      props.setNext(response.next)
      props.setList(response.results)
    } catch (error) {
      Alert.alert('Error on handlePreviousNext: ' + error)
    }
  }

  function checkDisabled(nextPrevious) {
    return nextPrevious === null || (props.search !== '' && props.list.lenght <= 1)
  }

  return (
    <View style={style.content}>
      <View style={row.default}>
        <TouchableOpacity
          onPress={() =>
            props.init ? handleFirst() : handlePreviousNext(props.previous)
          }
          disabled={checkDisabled(props.previous)}
          style={
            checkDisabled(props.previous)
              ? style.buttonDisabled
              : style.buttonEnabled
          }
        >
          <Icon name='chevron-left' size={25} color={checkDisabled(props.previous) ? 'white' : `${colors.yellow.color}`} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => (props.init ? handleFirst() : handlePreviousNext(props.next))}
          disabled={checkDisabled(props.next)}
          style={
            checkDisabled(props.next)
              ? style.buttonDisabled
              : style.buttonEnabled
          }
        >
          <Icon name='chevron-right' size={25} color={checkDisabled(props.next) ? 'white' : `${colors.yellow.color}`} />
        </TouchableOpacity>
      </View>
    </View>
  )
}