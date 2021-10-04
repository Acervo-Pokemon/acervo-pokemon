// react, react-native, expo
import React, { useEffect, useState, useCallback } from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
// control
import { getDetails, capitalize } from '../../control/pokemonControl'
import { isFavoriteControl, saveFavoriteControl } from '../../control/favoriteControl'

// style
import style from './stylesItem'
import { useNavigation } from '@react-navigation/native'

export default function Item({ data, page, loadList }) {
  const [img, setImg] = useState();
  const [pokemon, setPokemon] = useState()
  const navigation = useNavigation();
  const [favorite, setFavorite] = useState(false);

  const onRefresh = useCallback(async () => {
    let valid = await isFavoriteControl(data)
    setFavorite(valid);
    if (page === 'Favorites') {
      await loadList()
    }
  }, []);

  useEffect(() => {
    async function load(){
      const details = await getDetails(data.url);
      setImg(details.sprites.front_default);
      let valid = await isFavoriteControl(data)
      setFavorite(valid);
      setPokemon(details)
    }
    load();
    const unsubscribe = navigation.addListener('focus', async () => {
      load();
      onRefresh();
    });
    return unsubscribe;
  }, []);

  async function save() {
    await saveFavoriteControl(data);
    onRefresh();
  }

  return (
    <View style={style.toucheable}>
      <TouchableOpacity
        style={{ width: 300, flexDirection: 'row', alignItems: 'center' }}
        onPress={() => navigation.navigate('Details', { pokemon })}
      >
        <Image source={{ uri: img }} style={style.image}></Image>
        <View style={{ width: '75%' }}>
          <Text style={style.text}>{capitalize(data.name)}</Text>
        </View>
      </TouchableOpacity>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ButtonFavorites onPress={save} favorite={favorite}></ButtonFavorites>
      </View>
    </View>
  )
}

function ButtonFavorites({ favorite, onPress }) {
  return (
    <View style={{}}>
      <TouchableOpacity
        onPress={onPress}
        style={style.btnFavorites}
      >
        <Icon color={favorite ? "#FFEC14" : "grey"} size={35} name="star" />
      </TouchableOpacity>
    </View>
  )
}