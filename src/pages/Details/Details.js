import React from 'react'
import { Image, StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput } from 'react-native'
import style from './styleDetails'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DataTable } from 'react-native-paper';



export default function Details() {

  return (
    <View style={ style.boxDetails }>
      <View style={ style.containerTop }>
        <View style={ style.dtContainer }>
          <DataTable>

            <DataTable.Row style={ style.dtRow }>
              <DataTable.Cell style={ style.epacoCell }>
                <DataTable.Cell color style={ style.dtCellLabel }><Text style={ style.dtTextLeft } >Hp : </Text></DataTable.Cell>
                <Text >  </Text>
                <DataTable.Cell style={ style.dtCellData }><Text style={ style.dtTextRigth }>  999</Text></DataTable.Cell>
              </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row style={ style.dtRow }>
              <DataTable.Cell style={ style.epacoCell }>
                <DataTable.Cell color style={ style.dtCellLabel }><Text style={ style.dtTextLeft } >Attack : </Text></DataTable.Cell>
                <Text >  </Text>
                <DataTable.Cell style={ style.dtCellData }><Text style={ style.dtTextRigth }>  999</Text></DataTable.Cell>
              </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row style={ style.dtRow }>
              <DataTable.Cell style={ style.epacoCell }>
                <DataTable.Cell color style={ style.dtCellLabel }><Text style={ style.dtTextLeft } >Defence : </Text></DataTable.Cell>
                <Text >  </Text>
                <DataTable.Cell style={ style.dtCellData }><Text style={ style.dtTextRigth }>  999</Text></DataTable.Cell>
              </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row style={ style.dtRow }>
              <DataTable.Cell style={ style.epacoCell }>
                <DataTable.Cell color style={ style.dtCellLabel }><Text style={ style.dtTextLeft } >Speed : </Text></DataTable.Cell>
                <Text >  </Text>
                <DataTable.Cell style={ style.dtCellData }><Text style={ style.dtTextRigth }>  999</Text></DataTable.Cell>
              </DataTable.Cell>
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


      <View tyle={ style.centerScreen }>
        {/* imagem pokemon */ }
        <View style={ style.centerScreen }>
          <Image
            source={ {
              flex: 1,
              uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg',
              width: 205,
              height: 205,
              margin: 20,
              display: 'flex',

            } }
          />
        </View>

      </View>


      {/* dados do pokemon */ }
      <View style={ style.containerTop }>
        <View style={ style.dtContainer }>
          <DataTable >
            <DataTable.Row style={ style.dtRow }>
              <DataTable.Cell style={ style.epacoCell }>
                <DataTable.Cell color style={ style.dtCellLabel }><Text style={ style.dtTextLeft } >Name : </Text></DataTable.Cell>
                <Text >  </Text>
                <DataTable.Cell style={ style.dtCellData }><Text style={ style.dtTextRigth }> 999</Text></DataTable.Cell>
              </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row style={ style.dtRow }>
              <DataTable.Cell style={ style.epacoCell }>
                <DataTable.Cell style={ style.dtCellLabel }><Text style={ style.dtTextLeft } >Height : </Text></DataTable.Cell>
                <Text >  </Text>
                <DataTable.Cell style={ style.dtCellData }><Text style={ style.dtTextRigth }> 999</Text></DataTable.Cell>
              </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row style={ style.dtRow }>
              <DataTable.Cell style={ style.epacoCell }>
                <DataTable.Cell style={ style.dtCellLabel }><Text style={ style.dtTextLeft } >Weight : </Text></DataTable.Cell>
                <Text >  </Text>
                <DataTable.Cell style={ style.dtCellData }><Text style={ style.dtTextRigth }> 999</Text></DataTable.Cell>
              </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row style={ style.dtRow }>
              <DataTable.Cell style={ style.epacoCell }>
                <DataTable.Cell style={ style.dtCellLabel }><Text style={ style.dtTextLeft } >Abilities :  </Text></DataTable.Cell>
                <Text >  </Text>
                <DataTable.Cell style={ style.dtCellData }><Text style={ style.dtTextRigth }> 999</Text></DataTable.Cell>
              </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row style={ style.dtRow }>
              <DataTable.Cell style={ style.epacoCell }>
                <DataTable.Cell style={ style.dtCellLabel }><Text style={ style.dtTextLeft } >Types :  </Text> </DataTable.Cell>
                <Text >  </Text>
                <DataTable.Cell style={ style.dtCellData }><Text style={ style.dtTextRigth }> 999</Text></DataTable.Cell>
              </DataTable.Cell>
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




