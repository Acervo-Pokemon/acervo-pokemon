import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    centerScreen: {
        flex : 1,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',      
        maxHeight: '100'
        
    },
    container : {
      backgroundColor: '#14279B'
    },
    textoViewer:{
      textAlign: 'center',
      justifyContent : 'center',
      color: '#14279B'
    },

    boxDetails:{
      flex: 1,
      borderRadius: 5,
      borderColor: '#000000',
      
    },

    statisticView: {
      flex: 2, 
      backgroundColor: 'steelblue'
    },

    photoPokemonView:{
      flex: 3,
      backgroundColor: 'skyblue'
    },

    characteristicsView:{
      flex: 3,
      backgroundColor: 'steelblue',
      
    }
    

})
export default style