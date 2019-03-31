import React from "react";
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from "react-native";

export default class Pokemon extends React.Component {
  state = {
    confirmPokemon: false
  };

  _confirmPokemon = () => {
    this.setState({ confirmPokemon: true });
  };

  render() {
    const { choosePokemon, selectedPokemon, backBtnPress } = this.props;
    const { confirmPokemon } = this.state;
    return (
      <View>
        <View style={styles.pokemon}>
          <Image
            source={{ uri: selectedPokemon.sprites.front }}
            style={{
              width: 200,
              height: 200,
              marginTop: 50
            }}
          />
          <Text style={styles.name}>
            {selectedPokemon.name.charAt(0).toUpperCase() +
              selectedPokemon.name.slice(1)}
          </Text>
          <Text style={styles.info}>
            Type: {selectedPokemon.types.join(", ")}
          </Text>
        </View>
        <View>
          {confirmPokemon ? (
            <>
              <Text style={styles.confirmed}>
                {selectedPokemon.name.charAt(0).toUpperCase() +
                  selectedPokemon.name.slice(1)}
                , You're Mine!
              </Text>
              <TouchableOpacity onPress={backBtnPress}>
                <View style={styles.buttonContainer2}>
                  <Text style={styles.button2}>Back to Dr.Oak</Text>
                </View>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TouchableOpacity onPress={choosePokemon}>
                <View style={styles.buttonContainer1}>
                  <Text style={styles.button1}>Choose Again</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={this._confirmPokemon}>
                <View style={styles.buttonContainer2}>
                  <Text style={styles.button2}>I choose you!</Text>
                </View>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pokemon: {
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 70
  },
  name: {
    color: "#3e3533",
    fontSize: 30,
    margin: 30,
    marginBottom: 30,
    textAlign: "center"
  },
  info: {
    color: "#726b67",
    fontSize: 20,
    marginBottom: 30,
    textAlign: "center"
  },
  button1: {
    color: "#999591",
    fontSize: 20
  },
  button2: {
    color: "#64b3d3",
    fontSize: 20
  },
  buttonContainer1: {
    alignItems: "center",
    borderColor: "#999591",
    borderRadius: 10,
    borderWidth: 2,
    padding: 15,
    paddingLeft: 50,
    paddingRight: 50,
    marginTop: 20
  },
  buttonContainer2: {
    alignItems: "center",
    borderColor: "#64b3d3",
    borderRadius: 10,
    borderWidth: 2,
    padding: 15,
    paddingLeft: 50,
    paddingRight: 50,
    marginTop: 20
  },
  confirmed: {
    textAlign: "center",
    fontSize: 20,
    color: "#3e3533",
    marginTop: 20
  }
});
