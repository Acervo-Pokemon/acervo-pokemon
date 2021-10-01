import { StyleSheet } from 'react-native'


const style = StyleSheet.create( {
  centerScreen: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: '100'
    
  },


  dtContainer: {
    borderRadius: 8,
    width: 300
  },

  dtRow: {
    border: 'none',
    textAlign: 'right',
   
    

  },

  dtTextLeft:{
    textAlign: 'right',
    fontWeight: 'bold',
    color:'#22368E',
    
    
  },
  
  dtTextRigth:{
    textAlign: 'left',
    color:'#22368E'
  },

  dtCell: {

  },


  dtCellLabel: {
   /*  fontWeight: 'bold',
    textAlign: 'right',
    fontSize: 18, */
    Fontfamily: 'Roboto',
    Fontstyle: 'Bold',
    Fontsize: '18px',
    Lineheight: '21px',
    Lineheight: '100%',
    alignItem: 'Right',
    Verticalalign: 'Top'
    
   

  },

  dtCellData: {
    /* textAlign: 'right',
    fontSize: 18, */
      Fontfamily: 'Roboto',
    Fontstyle: 'Bold',
    Fontsize: '18px',
    Lineheight: '21px',
    Lineheight: '100%',
    alignItem: 'Right',
    Verticalalign: 'Top'
    


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
    flex: 1,
    borderRadius: 8,
    width:  200,
    height: 200,
    backgroundColor: 'skyblue',
    justifyContent: 'center', 
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
    justifyContent: 'center',
    alignItems: 'center'
  },

  epacoCell:{
    justifyContent: 'space-between'
  }


} )
export default style