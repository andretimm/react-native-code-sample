import React, { Component } from 'react';
import {
  StatusBar,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  Dimensions,
  Text
} from 'react-native';
import { FAB } from 'react-native-paper';
import Colors from '../shared/Colors';


const PHOTOS = Array.from({ length: 24 }).map(
  (_, i) => `https://unsplash.it/300/300/?random&__id=${i}`
);

export default class HomePage extends Component {
  static title = 'Banner';

  state = {
    visible: true,
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={Colors.primaryDark}
        />

        <ScrollView>
          <View style={styles.grid}>
            {PHOTOS.map(uri => (
              <View key={uri} style={styles.containerImg} >
                <ImageBackground source={{ uri }} style={styles.image} >
                  <Text style={styles.paragraph}> TITLE </Text>
                </ImageBackground>
              </View >
            ))}
          </View>
        </ScrollView>
        <SafeAreaView>
          <View>
            <FAB
              icon="filter-list"
              style={styles.fab}
              onPress={() =>
                this.setState(state => ({ visible: !state.visible }))
              }
              color='white'
            />
          </View>
        </SafeAreaView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.secondary
  },
  containerImg: {
    height: Dimensions.get('window').width / 2,
    width: '50%',
    padding: 4,
  },
  image: {
    height: null,
    width: null,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    resizeMode: 'cover',
  },
  paragraph: {
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'black'
  },
});
