import { StyleSheet } from 'react-native'
import { shadow } from '../../assets/css/styles'

const style = StyleSheet.create({
  toucheable: {
    flexDirection: 'row',
    margin: 8,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    borderRadius: 6,
    ...shadow.default
  },
  image: {
    width: 120,
    height: 74
  },
  text: {
    fontSize: 30,
    textAlign: 'left',
    color: '#22368E'
  }
})
export default style