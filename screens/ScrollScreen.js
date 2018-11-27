import React, { Component } from 'react';
import { AppRegistry, ScrollView, Image, Text, StyleSheet, Platform } from 'react-native';

export default class ScrollScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Scroll me plz</Text>
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <Text style={styles.title}>These can be placeholder selfies</Text>
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <Text style={styles.title}>That tourists can upload</Text>
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <Text style={styles.title}>#ByThisMural</Text>
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <Text style={styles.title}>Link to Insta?</Text>
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <Text style={styles.title}>Or maybe Facebook?</Text>
      </ScrollView>
    );
  }
}

// skip these lines if using Create React Native App
AppRegistry.registerComponent(
  'AwesomeProject',
  () => IScrolledDownAndWhatHappenedNextShockedMe);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'tomato',
    paddingVertical: '15%'
  },
  title: {
    fontSize: 30,
    // fontFamily: '',
    textAlign: 'center'
  },
  image: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: '5%',
    marginTop: '2%',
    width: '90%',
    height: 150
  }
});