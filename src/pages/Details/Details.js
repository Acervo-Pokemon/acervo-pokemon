import React from 'react'
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput } from 'react-native'
import style from './styleDetails'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DataTable } from 'react-native-paper';
import Svg, { Image } from 'react-native-svg';


export default function Details() {

  return (
    <View style={ style.boxDetails }>
      <View style={ style.containerTop }>
        <View style={ style.dtContainer }>
          <DataTable>
            <DataTable.Row style={ style.dtRow }>
              <DataTable.Cell color style={ style.dtCellLabel }><Text style={ style.dtTextLeft } >Hp : </Text></DataTable.Cell>
              <DataTable.Cell style={ style.dtCellData }><Text style={ style.dtTextRigth}>999</Text></DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row style={ style.dtRow }>
              <DataTable.Cell style={ style.dtCellLabel }><Text style={ style.dtTextLeft } >Attack : </Text></DataTable.Cell>
              <DataTable.Cell style={ style.dtCellData }><Text style={ style.dtTextRigth}>999</Text></DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row style={ style.dtRow }>
              <DataTable.Cell style={ style.dtCellLabel }><Text style={ style.dtTextLeft } >Defence : </Text></DataTable.Cell>
              <DataTable.Cell style={ style.dtCellData }><Text style={ style.dtTextRigth}>999</Text></DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row style={ style.dtRow }>
              <DataTable.Cell style={ style.dtCellLabel }><Text style={ style.dtTextLeft } >Speed : </Text> </DataTable.Cell>
              <DataTable.Cell style={ style.dtCellData }><Text style={ style.dtTextRigth}>999</Text></DataTable.Cell>
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
        <img>
          
        </img>
        
      </View>
      {/* dados do pokemon */ }
      <View style={ style.containerTop2 }>
        <View style={ style.dtContainer }>
          <DataTable >
            <DataTable.Row style={ style.dtRow }>
              <DataTable.Cell color style={ style.dtCellLabel }> <Text style={ style.dtTextLeft } >Nome : </Text></DataTable.Cell>
              <DataTable.Cell style={ style.dtCellData }><Text style={ style.dtTextRigth}>999</Text></DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row style={ style.dtRow }>
              <DataTable.Cell style={ style.dtCellLabel }><Text style={ style.dtTextLeft } >Peso : </Text></DataTable.Cell>
              <DataTable.Cell style={ style.dtCellData }><Text style={ style.dtTextRigth}>999</Text></DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row style={ style.dtRow }>
              <DataTable.Cell style={ style.dtCellLabel }><Text style={ style.dtTextLeft } >Altura : </Text></DataTable.Cell>
              <DataTable.Cell style={ style.dtCellData }><Text style={ style.dtTextRigth}>999</Text></DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row style={ style.dtRow }>
              <DataTable.Cell style={ style.dtCellLabel }><Text style={ style.dtTextLeft } >Tipo : </Text> </DataTable.Cell>
              <DataTable.Cell style={ style.dtCellData }><Text style={ style.dtTextRigth}>999</Text></DataTable.Cell>
            </DataTable.Row>
          </DataTable>
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




