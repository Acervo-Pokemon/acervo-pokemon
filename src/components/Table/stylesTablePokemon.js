import { StyleSheet } from 'react-native'
import { colors } from '../../assets/css/styles'


const style = StyleSheet.create({
  table: {
    flexDirection: 'row',
  },
  leftWrapper: {
  },
  rightWrapper: {
    flex: 1,
    paddingLeft: 10,
  },
  titleText: {
    textAlign: 'right',
    fontWeight: 'bold',
    ...colors.blue,
  },
  text: {
    textAlign: 'left',
    ...colors.blue,
  }
})

export default style