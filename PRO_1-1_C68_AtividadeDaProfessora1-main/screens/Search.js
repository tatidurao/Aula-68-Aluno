import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class SearchScreen extends Component {
  render() {
    return (
      //crie um componente view
        //dentro do view crie um text e coloque o texto Tela de pesquisa
          //coloque o estilo dentro de cada componente
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5653D4"
  },
  text: {
    color: "#ffff",
    fontSize: 30
  }
});
