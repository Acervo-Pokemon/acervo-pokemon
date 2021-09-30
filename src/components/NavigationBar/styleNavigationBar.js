import { StyleSheet } from 'react-native'
import { button } from '../../assets/css/styles'

const style = StyleSheet.create({
  content: {
    paddingTop: 15
  },
  buttonEnabled: {
    ...button.default
  },
  buttonDisabled: {
    ...button.disabled
  }
})
export default style