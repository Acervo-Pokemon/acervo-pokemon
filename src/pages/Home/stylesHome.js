import { StyleSheet } from 'react-native'
import { button, colors } from '../../assets/css/styles'

const style = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: 'white'
  },
  content: {
    height: 400,
    paddingTop: 15
  },
  buttonEnabled: {
    ...button.default
  },
  buttonDisabled: {
    ...button.disabled
  },
  feedbackSearch: {
    alignItems: 'center',
    fontSize: 16,
    ...colors.blue
  }
})

export default style
