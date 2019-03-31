import React from "react";
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from "react-native";
import Pokemon from "./Pokemon";

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    isPokemonChosen: false,
    pokemons: {},
    selectedPokemon: undefined
  };

  componentDidMount = () => {
    return fetch("http://localhost:3000/pokemon")
      .then(res => res.json())
      .then(data => this.setState({ pokemons: data }));
  };

  _handleBtnPress = () => {
    const randomNo = Math.floor(Math.random() * 150);
    this.setState({
      isPokemonChosen: true,
      selectedPokemon: this.state.pokemons[randomNo]
    });
  };

  _backBtnPress = () => {
    this.setState({ isPokemonChosen: false });
  };

  _choosePokemon = () => {
    const randomNo = Math.floor(Math.random() * 150);
    this.setState({ selectedPokemon: this.state.pokemons[randomNo] });
  };

  render() {
    const { isPokemonChosen, selectedPokemon } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        {isPokemonChosen ? (
          <Pokemon
            choosePokemon={this._choosePokemon}
            selectedPokemon={selectedPokemon}
            backBtnPress={this._backBtnPress}
          />
        ) : (
          <View style={styles.main}>
            <Text style={styles.title}>Dr.Oak's Lab</Text>
            <Image
              source={require("./assets/Professor_Oak_XY.png")}
              style={styles.welcomeImage}
            />
            <Text style={styles.description}>
              "Hey! Wait! Don't go out! It's unsafe! You need your own Pokémon
              for your protection. Here, come with me!"
            </Text>
            <TouchableOpacity onPress={this._handleBtnPress}>
              <View style={styles.buttonContainer}>
                <Text style={styles.button}>Choose Pokemon</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dee8eb",
    alignItems: "center"
  },
  main: {
    alignItems: "center"
  },
  pokemon: {},
  title: {
    color: "#3e3533",
    fontSize: 50,
    marginTop: 100,
    marginBottom: 20
  },
  description: {
    color: "#726b67",
    fontSize: 18,
    margin: 30,
    marginBottom: 30,
    textAlign: "center"
  },
  button: {
    color: "#64b3d3",
    fontSize: 20
  },
  buttonContainer: {
    borderColor: "#64b3d3",
    borderRadius: 10,
    borderWidth: 2,
    padding: 15,
    paddingLeft: 50,
    paddingRight: 50
  }
});
