import React, { useState, useEffect } from "react";
import { View, Alert, TouchableOpacity } from "react-native";
import FlatListPokemon from "../../components/FlatListPokemon/FlatListPokemon";
import { getFirstPage, navigateTo } from "../../control/pokemonControl";
import style from "./style";
import Icon from "react-native-vector-icons/FontAwesome";
import { StatusBar } from "expo-status-bar";
export default function Favorites() {
  const [list, setList] = useState([]);
  const [previous, setPrevious] = useState();
  const [next, setNext] = useState();
  const [init, setInit] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    handleFirst();
  }, []);

  async function handleFirst() {
    try {
      const response = await getFirstPage(4);
      setPrevious(response.previous);
      setNext(response.next);
      setList(response.results);
      setInit(false);
      setSearch("");
    } catch (error) {
      Alert.alert("Error on getFirstPage: " + error);
    }
  }

  async function handlePreviousNext(url) {
    if (url === null) {
      return;
    }

    try {
      const response = await navigateTo(url);
      setPrevious(response.previous);
      setNext(response.next);
      setList(response.results);
    } catch (error) {
      Alert.alert("Error on getFirstPage: " + error);
    }
  }

  return (
    <View>
      <StatusBar hidden />
      <View style={{ justifyContent: "space-around", height: "100%" }}>
        <View style={{ paddingTop: 30 }}>
          <FlatListPokemon list={list} />
        </View>

        <View style={{ paddingTop: 15 }}>
          <View style={style.row}>
            <TouchableOpacity
              onPress={() =>
                init ? handleFirst() : handlePreviousNext(previous)
              }
              disabled={previous === null}
              style={
                previous === null
                  ? style.buttonPreviousNextDisabled
                  : style.buttonPreviousNext
              }
            >
              <Icon name="chevron-left" size={25} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => (init ? handleFirst() : handlePreviousNext(next))}
              disabled={next === null}
              style={
                next === null
                  ? style.buttonPreviousNextDisabled
                  : style.buttonPreviousNext
              }
            >
              <Icon name="chevron-right" size={25} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
