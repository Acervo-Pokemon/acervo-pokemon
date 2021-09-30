import { StyleSheet } from 'react-native'
import { colors, row, button } from '../../assets/css/styles'

const style = StyleSheet.create({
  inputSearch: {
    ...colors.blue,
    borderWidth: 3,
    borderColor: `${colors.blue.color}`,
    borderRadius: 5,
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 18,
    width: '65%',
  },
  row: {
    ...row.default
  },
  buttonEnabled: {
    ...button.default
  },
  buttonDisabled: {
    ...button.disabled
  }
})
export default style