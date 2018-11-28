import React from 'react';
import * as Expo from 'expo';
import { MapView } from 'expo';
import { Constants, Location, Permissions } from 'expo';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

import GeoPoints from '../data/GeoPoints'

export default class MapScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      markers: [],
      location: {
        latitude: 21.29679203358388,
        longitude: -157.85667116574777
      }
    };
  }

  // simulate db request
  fetchLocationData = (coordMap) => {
    // console.log('FETCHED: ', coordMap)

    // set state to db data
    this.setState({
      isLoading: false,
      markers: coordMap,
    })
  }

  componentDidMount = async () => {


    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log('MAP CURRENT: ', location)
    this.setState({
      location: location
    });

    // console.log('IMPORTED: ', GeoPoints)
    this.fetchLocationData(GeoPoints)
  }

  // componentWillMount = () => {


  //   let location = Location.getCurrentPositionAsync({});
  //   console.log('MAP CURRENT: ', location)
  //   this.setState({
  //     location: location
  //   });
  // }

  render() {

    console.log('THIS.STATE.LOCATION: ', this.state.location)

    this.state.markers.map((marker) => {
      const coords = {
        latitude: marker.latitude,
        longitude: marker.longitude
      };
    })

    return (
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude: 21.29679203358388,
          longitude: -157.85667116574777,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        <MapView.Marker
          style={styles.currentLocal}
          pinColor='green'
          coordinate={this.state.location.coords}
          title='Current Location'
        />
        {this.state.isLoading ? null : this.state.markers.map((marker, index) => {
          const coords = {
            latitude: marker.latitude,
            longitude: marker.longitude,
          };

          const metadata = `Status: ${marker.statusValue}`;

          return (
            <MapView.Marker
              key={index}
              coordinate={coords}
              title={marker.stationName}
              description={metadata}
            />
          );
        })}
      </MapView>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
