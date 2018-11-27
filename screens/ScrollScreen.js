import React, { Component } from 'react';
import { AppRegistry, ScrollView, Image, Text, StyleSheet, Platform } from 'react-native';

import { MonoText } from '../components/StyledText';
import { RangaText } from '../components/StyledText';

export default class ScrollScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <RangaText style={styles.title}>Scroll me plz</RangaText>
        <Image style={styles.image} source={{ uri: "http://powwowhawaii.com/wp-content/uploads/2017/03/pwh2017_KevinLyons02_BrandonShigeta.jpg" }} />
        <Image style={styles.image} source={{ uri: "http://powwowhawaii.com/wp-content/uploads/2017/03/pwh2017_Evoca1_JasperWong.jpg" }} />
        <Image style={styles.image} source={{ uri: "http://powwowhawaii.com/wp-content/uploads/2017/03/pwh2017_Ouizi_BrandonShigeta.jpg" }} />
        <Image style={styles.image} source={{ uri: "http://powwowhawaii.com/wp-content/uploads/2017/03/pwh2017_MungMonster_BrandonShigeta.jpg" }} />
        <Image style={styles.image} source={{ uri: "http://powwowhawaii.com/wp-content/uploads/2017/03/bounce_02_ximen.jpg" }} />
        <Image style={styles.image} source={{ uri: "http://powwowhawaii.com/wp-content/uploads/2016/07/Dragon76.jpg" }} />
        <RangaText style={styles.title}>These can be placeholder selfies</RangaText>
        <Image style={styles.image} source={{ uri: "http://powwowhawaii.com/wp-content/uploads/2016/03/pwh2016-Bicicleta-Sem-Freio.jpg" }} />
        <Image style={styles.image} source={{ uri: "http://powwowhawaii.com/wp-content/uploads/2017/03/pwh2017_Woes_BrandonShigeta.jpg" }} />
        <Image style={styles.image} source={{ uri: "http://powwowhawaii.com/wp-content/uploads/2017/03/luiseone_ximen.jpg" }} />
        <Image style={styles.image} source={{ uri: "http://powwowhawaii.com/wp-content/uploads/2016/09/patchwiskey.jpg" }} />
        <Image style={styles.image} source={{ uri: "http://powwowhawaii.com/wp-content/uploads/2016/03/pwh2016-Hula.jpg" }} />
        <Image style={styles.image} source={{ uri: "http://powwowhawaii.com/wp-content/uploads/2016/03/pwh2016-Katch.jpg" }} />
        <RangaText style={styles.title}>That tourists can upload</RangaText>
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <RangaText style={styles.title}>#ByThisMural</RangaText>
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <RangaText style={styles.title}>Link to Insta?</RangaText>
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <RangaText style={styles.title}>Or maybe Facebook?</RangaText>
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
    backgroundColor: '#fff',
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