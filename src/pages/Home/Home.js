import React, { useState, useEffect } from "react";
import { View, Button, Alert, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import FlatListPokemon from "../../components/FlatListPokemon/FlatListPokemon";
import { getFirstPage, navigateTo } from "../../control/pokemonControl";
import style from "./stylesHome";

export default function Home() {
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
      <View style={{ paddingTop: 30 }}>
        <View style={style.row}>
          <TextInput
            style={style.inputPesquisar}
            placeholder={"Pesquisar pelo nome..."}
            placeholderTextColor={"#22368E"}
            onChangeText={setSearch}
            value={search}
          />
          <Button title="####" color="#22368E" />
          <Button title="####" color="#22368E" onPress={handleFirst} />
        </View>
      </View>

      <View style={{ paddingTop: 30 }}>
        <FlatListPokemon list={list} />
      </View>

      <View style={{ paddingTop: 30 }}>
        <View style={style.row}>
          <Button
            color="#22368E"
            title="Anterior"
            onPress={() =>
              init ? handleFirst() : handlePreviousNext(previous)
            }
          />
          <Button
            color="#22368E"
            title="Próxima"
            onPress={() => (init ? handleFirst() : handlePreviousNext(next))}
          />
        </View>
      </View>
    </View>
  );
}
