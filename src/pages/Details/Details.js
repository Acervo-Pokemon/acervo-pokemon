import React from 'react'
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native'
import style from './styleDetails'

export default function Details() {

  return (

    <View style={{ flex: 1 }}>
      <View style={{ flex: 2, backgroundColor: 'steelblue' }} >
        <Text style={style.textoViewer}> estastisiticas
          <View >
            <Button title='####' color='#22368E' />
          </View>
        </Text>

      </View>
      <View style={{ flex: 3, backgroundColor: 'skyblue' }} >
        <Text style={style.textoViewer} > foto do pokemon </Text>
      </View>
      <View style={{ flex: 3, backgroundColor: 'steelblue' }} >
        <Text style={style.textoViewer} > caracteristicas</Text>
      </View>
    </View>
  )
}




