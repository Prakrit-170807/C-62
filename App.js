import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { Weather: "" }
  }

  getWeather = async () => {
    var url = 'https://fcc-weather-api.glitch.me/api/current?lat=28&lon=78'
    var hot_cool = await fetch(url)
    var pormis_hot_cool = await hot_cool.json()
    this.setState({ Weather: pormis_hot_cool })
  }

  componentDidMount = () => {
    this.getWeather
  }

  render() {
    if (this.state.Weather === "") {
      return (
        <View>
          <Text>LODING𛲕𛲕𛲕</Text>
        </View>
      );
    }
    else {
      return (
        <View>
          <View>
            <Text style={styles.title}>
              WEATHER FORCAST
            </Text>
            <Image style={styles.cloudImage} source={require("./sun.png")}>

            </Image>
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                {this.state.Weather.main.temp}&deg;C
              </Text>
              <Text style={styles.textContainer}>
                {this.state.Weather.main.humidity}
              </Text>
              <Text style={styles.textContainer}>
                {this.state.Weather.weather[0].description}
              </Text>
            </View>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{ marginTop: 50, fontSize: 30, fontWeight: 'bold' }, 
  cloudImage :{ width: 200, height: 200, marginTop: 30 }, 
  textContainer : { flex: 1, flexDirection:'column', marginTop:30 }

});
