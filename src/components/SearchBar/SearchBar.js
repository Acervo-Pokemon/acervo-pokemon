// react, react-native, expo
import React from 'react'
import { View, TouchableOpacity, Keyboard } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'

// control
import { getByName } from '../../control/pokemonControl'

// styles
import { row, colors } from '../../assets/css/styles'
import style from './styleSearchBar'


export default function SearchBar(props) {

  async function handleName() {
    try {
      const response = await getByName(props.search)
      props.setList(response.forms)
      props.setStatusSearch('')

    } catch (error) {
      if (error.toString().includes('code 404')) {
        props.setList([])
        props.setStatusSearch('Nenhum pokémon encontrado com esse nome :(')
      } else {
        Alert.alert('Error on handleName: ' + error)
      }
    } finally {
      Keyboard.dismiss()
    }
  }

  return (
    <View style={row.default}>
      <TextInput
        style={style.inputSearch}
        placeholder={'Pesquisar pelo nome...'}
        placeholderTextColor={`${colors.blue.color}`}
        onChangeText={props.setSearch}
        value={props.search}
      />

      <TouchableOpacity
        onPress={handleName}
        disabled={props.search === ''}
        style={
          props.search === ''
            ? style.buttonDisabled
            : style.buttonEnabled
        }
      >
        <Icon name='search' size={25} color={props.search === '' ? 'white' : `${colors.yellow.color}`} />
      </TouchableOpacity>

      <TouchableOpacity
        style={style.buttonEnabled}
        onPress={props.handleFirst}
      >
        <Icon name='repeat' size={25} color={`${colors.yellow.color}`} />
      </TouchableOpacity>
    </View>
  )
}