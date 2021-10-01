import React from 'react'
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput } from 'react-native'
import style from './styleDetails'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Details() {

  return (
    <View>
      <View>
        {/* cabeçalho */ }
        <View>
          {/* texto estatisticas */ }
          <View>
            <Text>Hp</Text>
            <Text>yyy</Text>
          </View>

          <View>
            <Text>Attack</Text>
            <Text>yyy</Text>
          </View>

          <View>
            <Text>Defense</Text>
            <Text>yyy</Text>
          </View>

          <View>
            <Text>Speed</Text>
            <Text>yyy</Text>
          </View>

          {/* botao favorito */ }
          <TouchableOpacity onPress={ null } style={ { borderRadius: 10, width: 50, height: 50, backgroundColor: "#22368E", justifyContent: 'center', alignItems: 'center' } } >
            <Icon color="#FFEC14" size={ 35 } name='star' />
          </TouchableOpacity>

        </View>

      </View>
      <View>
        {/* imagem pokemon */ }
        <Text>imagem</Text>
      </View>
      <View>
        {/* dados do pokemon */ }
        <View>
          <Text>nome</Text>
          <Text>XXX</Text>
        </View>

        <View>
          <Text>altura</Text>
          <Text>XXX</Text>
        </View>

        <View>
          <Text>peso</Text>
          <Text>XXX</Text>
        </View>

        <View>
          <Text>habilidades</Text>
          <Text>XXX</Text>
        </View>

        <View>
          <Text>tipos</Text>
          <Text>XXX</Text>
        </View>

      </View>
    </View>

    /*
     ,
 
     <View style={ style.boxDetails }>
       <View style={ style.statisticView } >
         <Text style={ style.textoViewer }> estastisiticas
 
         </Text>
 
         <TouchableOpacity onPress={ null } style={ { borderRadius: 10, width: 50, height: 50, backgroundColor: "#22368E", justifyContent: 'center', alignItems: 'center' } } >
           <Icon color="#FFEC14" size={ 35 } name='star' />
         </TouchableOpacity>
 
       </View>
       <View style={ style.photoPokemonView } >
         <Text style={ style.textoViewer } > foto do pokemon </Text>
       </View>
       <View style={ style.characteristicsView } >
         <Text style={ style.textoViewer } > caracteristicas</Text>
       </View>
     </View>
    */
  )
}




