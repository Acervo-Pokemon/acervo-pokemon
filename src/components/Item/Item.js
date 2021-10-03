// react, react-native, expo
import React, { useEffect, useState, useCallback } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
// control
import { getDetails, capitalize } from '../../control/pokemonControl'

// style
import style from './stylesItem'
import { useNavigation } from '@react-navigation/native'

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Item({ data }) {
  const [img, setImg] = useState();
  const [pokemon, setPokemon] = useState()
  const navigation = useNavigation();
  const [favorite, setFavorite] = useState(false);

  const onRefresh = useCallback(async () => {
    setFavorite(await isFavorite());
  }, []);

  useEffect(() => {
    async function loadImg() {
      const details = await getDetails(data.url);
      setImg(details.sprites.front_default);
      setFavorite(await isFavorite());
      setPokemon(details)
    }

    loadImg();
  });

  async function isFavorite() {
    let favorites = await getAllFavorite();
    if (favorites.length == 0) {
      return false;
    }
    const url = data.url.replace('-form', '');
    return favorites.filter((value) => value === url).length > 0
  }

  async function getAllFavorite() {
    let favorites = JSON.parse(await AsyncStorage.getItem("@favorites"));
    if (favorites == null) {
      return [];
    }
    return favorites;
  }

  async function saveFavorite() {
    let favorites = await getAllFavorite();
    const url = data.url.replace('-form', '');
    (favorite ? favorites = favorites.filter((value) => value !== url) : favorites.push(url));
    await AsyncStorage.setItem('@favorites', JSON.stringify(favorites));
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
        <ButtonFavorites onPress={saveFavorite} favorite={favorite}></ButtonFavorites>
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