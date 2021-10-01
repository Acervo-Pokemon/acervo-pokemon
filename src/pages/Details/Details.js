import React from 'react'
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput } from 'react-native'
import style from './styleDetails'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DataTable } from 'react-native-paper';


export default function Details() {

  return (
    <View style={ style.boxDetails }>
      <View style={ style.containerTop }>

        <View style={ style.container }>
          <DataTable>
           

            <DataTable.Row style={ style.dtrow }>
              <DataTable.Cell>John</DataTable.Cell>
              <DataTable.Cell>999</DataTable.Cell>
            </DataTable.Row>
            
            
            <DataTable.Row>
              <DataTable.Cell>Attack</DataTable.Cell>
              <DataTable.Cell>999</DataTable.Cell>
            </DataTable.Row>

            
            <DataTable.Row>
              <DataTable.Cell>Defense</DataTable.Cell>
              <DataTable.Cell>999</DataTable.Cell>
            </DataTable.Row>

            
            <DataTable.Row>
              <DataTable.Cell>Speed</DataTable.Cell>
              <DataTable.Cell>999</DataTable.Cell>
            </DataTable.Row>
           


          </DataTable>
        </View>

        {/* botao favorito */ }
        <View style={ style.containerTopRigth }>
          <TouchableOpacity onPress={ null } style={ style.touchableOpacityFavorito } >
            <Icon color="#FFEC14" size={ 35 } name='star' />
          </TouchableOpacity>
        </View>
      </View>

      <View style={ style.photoPokemonView }>
        {/* imagem pokemon */ }
        <Text>imagem</Text>
      </View>
      <View style={ style.characteristicsView }>
        {/* dados do pokemon */ }
        <View style={ style.textViewer }>
          <Text>nome</Text>
          <Text>XXX</Text>
        </View>

        <View style={ style.textViewer }>
          <Text>altura</Text>
          <Text>XXX</Text>
        </View>

        <View style={ style.textViewer }>
          <Text>peso</Text>
          <Text>XXX</Text>
        </View>

        <View style={ style.textViewer } >
          <Text>habilidades</Text>
          <Text>XXX</Text>
        </View>

        <View style={ style.textViewer }>
          <Text>tipos</Text>
          <Text>XXX</Text>
        </View>

      </View>
    </View>

    /*
     ,
 

     
     <View style={ style.boxDetails }>
       <View style={ style.statisticView } >
         <Text style={ style.textViewer }> estastisiticas
 
         </Text>
 
         <TouchableOpacity onPress={ null } style={ { borderRadius: 10, width: 50, height: 50, backgroundColor: "#22368E", justifyContent: 'center', alignItems: 'center' } } >
           <Icon color="#FFEC14" size={ 35 } name='star' />
         </TouchableOpacity>
 
       </View>
       <View style={ style.photoPokemonView } >
         <Text style={ style.textViewer } > foto do pokemon </Text>
       </View>
       <View style={ style.characteristicsView } >
         <Text style={ style.textViewer } > caracteristicas</Text>
       </View>
     </View>
    */
  )
}




