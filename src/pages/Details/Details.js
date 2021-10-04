// react , react native
import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { SvgUri } from 'react-native-svg'
import TablePokemon from '../../components/Table/TablePokemon'
import Header from '../../components/template/Header'

// control
import { handleAbilities, handleTypes, handleStatsTableData, handleStatsTableTitle } from '../../control/detailsControl'
import { capitalize } from '../../control/pokemonControl'
import { isFavoriteControl, saveFavoriteControl } from '../../control/favoriteControl'
//style
import style from './styleDetails'

export default function Details(props) {

  const pokemon = props.route.params.pokemon
  const [abilities, setAbilities] = useState('')
  const [types, setTypes] = useState()
  const [statsTableTitle, setStatsTableTitle] = useState([])
  const [statsTableData, setStatsTableData] = useState([])
  const [favorite, setFavorite] = useState(true);
  const fontSize = 18

  const onRefresh = useCallback(async () => {
    let url = getUrl();
    setFavorite(await isFavoriteControl({ url: url }))
  }, []);

  useEffect(() => {
    handleAbilities({ pokemon, setAbilities })
    handleTypes({ pokemon, setTypes })
    handleStatsTableTitle({ pokemon, setStatsTableTitle })
    handleStatsTableData({ pokemon, setStatsTableData })
    async function load() {
      let url = getUrl();
      setFavorite(await isFavoriteControl({ url: url }))
    }
    load();
  }, [])

  function getUrl() {
    return pokemon.location_area_encounters.replace("encounters", "");
  }
  async function save() {
    let url = getUrl();
    await saveFavoriteControl({ url: url, name: pokemon.name });
    onRefresh();
  }

  return (
    <View style={style.container}>
      <Header onPress={save} favorite={favorite} />
      <ImageBackground
        // source={pokemon.sprites.other.dream_world.front_default}

        resizeMode="cover"
        style={style.image}
      />
      <View style={style.containerTop}>
        <TablePokemon
          tableTitle={statsTableTitle}
          tableData={statsTableData}
          tableWidth={150}
          lineHeight={25}
          lineCount={4}
          leftWrapperWidth={80}
          leftWrapperWidth={'auto'}
          fontSize={fontSize}
        />
      </View>

      <View style={style.containerImg}>
        <SvgUri
          width='100%'
          height='100%'
          uri={pokemon.sprites.other.dream_world.front_default} />
      </View>

      <View style={style.containerBottom}>
        <TablePokemon
          tableTitle={['Nome:', 'Altura:', 'Peso:', 'Habilidades:', 'Tipos:']}
          tableData={[[capitalize(pokemon.name), pokemon.height, pokemon.weight, abilities, types]]}
          tableWidth={'auto'}
          lineHeight={25}
          lineCount={5}
          leftWrapperWidth={120}
          rightWrapperWidth={'auto'}
          fontSize={fontSize}
        />
      </View>
    </View>
  )
}
