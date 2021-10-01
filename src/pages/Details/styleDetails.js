import { StyleSheet } from 'react-native'
import { colors } from
const style = StyleSheet.create({
  centerScreen: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: '100'
  },

  dtContainer: {
    width: 300
  },

  dtRow: {
    border: none

  },

  dtCell: {

  },


  dtCellLabel: {
    fontWeight: 'bold',
    textAlign: 'right',
    fontSize: 20,
    color: 'black'

  },

  dtCellData: {
    textAlign: 'left',
    fontSize: 20


  },

  textViewer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  boxDetails: {
    flex: 1,
  },

  containerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    /* backgroundColor: 'steelblue', */
    margin: 20

  },

  containerTopLeft: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  containerText: {
    marginLeft: 20

  },

  containerTopRigth: {

  },

  photoPokemonView: {
    flex: 3,
    /* backgroundColor: 'skyblue' */
  },

  characteristicsView: {
    flex: 3,
    /* backgroundColor: 'steelblue', */

  },

  touchableOpacityFavorito: {
    borderRadius: 10,
    width: 50,
    height: 50,
    backgroundColor: "#22368E",
    justifyContent: 'flex-end',
    alignItems: 'center'
  }


})
export default style