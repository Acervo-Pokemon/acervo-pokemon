import React, { useState, useEffect } from "react";
import { View, Button, Alert, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import FlatListPokemon from "../../components/FlatListPokemon/FlatListPokemon";
import Header from "../../components/template/Header";
import {
  getByName,
  getFirstPage,
  navigateTo,
} from "../../control/pokemonControl";
import style from "./stylesHome";
import Icon from "react-native-vector-icons/FontAwesome";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const [list, setList] = useState([]);
  const [previous, setPrevious] = useState();
  const [next, setNext] = useState();
  const [init, setInit] = useState(true);
  const [search, setSearch] = useState("");
  const [statusSearch, setStatusSearch] = useState("");
  const navigation = useNavigation();

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
      setStatusSearch("");
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

  async function handleName() {
    try {
      const response = await getByName(search);
      setList(response.forms);
      setInit(false);
      setStatusSearch("");
    } catch (error) {
      if (error.toString().includes("code 404")) {
        setList([]);
        setStatusSearch("Nenhum pokémon encontrado com esse nome");
      } else {
        Alert.alert("Error on getFirstPage: " + error);
      }
    }
  }

  function checkDisabled() {
    return next === null || (search !== "" && list.length <= 1);
  }

  return (
    <View>
      <StatusBar hidden />
      <Header
        onPress={() => {
          navigation.navigate("Favorites");
        }}
      />
      <View style={{}}>
        <View style={style.row}>
          <TextInput
            style={style.inputPesquisar}
            placeholder={"Pesquisar pelo nome..."}
            placeholderTextColor={"#22368E"}
            onChangeText={setSearch}
            value={search}
          />
          <TouchableOpacity
            style={style.buttonSearchClear}
            onPress={handleName}
            disabled={search === ""}
            style={
              search === ""
                ? style.buttonSearchClearDisabled
                : style.buttonSearchClear
            }
          >
            <Icon name="search" size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={style.buttonSearchClear}
            onPress={handleFirst}
          >
            <Icon name="repeat" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ paddingTop: 15 }}>
        <FlatListPokemon list={list} />
      </View>

      <View style={style.feedbackSearch}>
        <Text style={style.feedbackSearch}>{statusSearch}</Text>
      </View>
      {
        list.length > 0 &&
        <View style={{ paddingTop: 15 }}>
          <View style={style.row}>
            <TouchableOpacity
              onPress={() =>
                init ? handleFirst() : handlePreviousNext(previous)
              }
              disabled={checkDisabled()}
              style={
                checkDisabled()
                  ? style.buttonPreviousNextDisabled
                  : style.buttonPreviousNext
              }
            >
              <Icon name="chevron-left" size={25} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => (init ? handleFirst() : handlePreviousNext(next))}
              disabled={checkDisabled()}
              style={
                checkDisabled()
                  ? style.buttonPreviousNextDisabled
                  : style.buttonPreviousNext
              }
            >
              <Icon name="chevron-right" size={25} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      }
    </View>
  );
}
