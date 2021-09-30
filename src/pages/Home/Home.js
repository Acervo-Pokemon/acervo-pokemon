import React, { useState, useEffect } from "react";
import { View, Button, Alert, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import FlatListPokemon from "../../components/FlatListPokemon/FlatListPokemon";
import Header from "../../components/template/Header";
import { getFirstPage, navigateTo } from "../../control/pokemonControl";
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
    <View style={style.base}>
      <StatusBar hidden/>
      <Header onPress={()=> {navigation.navigate('Favorites')}}/>
      <View style={{}}>
        <View style={style.row}>
          <TextInput
            style={style.inputPesquisar}
            placeholder={"Pesquisar pelo nome..."}
            placeholderTextColor={"#22368E"}
            onChangeText={setSearch}
            value={search}
          />
          <TouchableOpacity style={style.buttonSearchClear} >
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

      <View style={style.content}>
        <View style={style.row}>
          <TouchableOpacity
            onPress={() =>
              init ? handleFirst() : handlePreviousNext(previous)
            }
            disabled={previous === null}
            style={(previous === null)? style.buttonPreviousNextDisabled: style.buttonPreviousNext} >
            <Icon name="chevron-left" size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => (init ? handleFirst() : handlePreviousNext(next))}          
            disabled={next === null}  
            style={(next === null)? style.buttonPreviousNextDisabled: style.buttonPreviousNext}
          >
            <Icon name="chevron-right" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}