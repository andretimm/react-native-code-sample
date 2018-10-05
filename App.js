/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Button
} from 'react-native';

import { createStackNavigator } from 'react-navigation';

import ShimmerEffect from './components/ShimmerEffect';
import SwipperIntro from './components/SwipperIntro';
import Tab from './components/Tab';
import CarouselScreen from './components/Carousel';
import VectorIcons from './components/VectorIcons';

class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="ShimmerEffect"
          onPress={() => this.props.navigation.navigate('ShimmerEffect')}
        />
        <Button
          title="SwipperIntro"
          onPress={() => this.props.navigation.navigate('SwipperIntro')}
        />
        <Button
          title="Tab"
          onPress={() => this.props.navigation.navigate('Tab')}
        />
        <Button
          title="Carousel"
          onPress={() => this.props.navigation.navigate('Carousel')}
        />
        <Button
          title="VectorIcons"
          onPress={() => this.props.navigation.navigate('VectorIcons')}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  SwipperIntro: {
    screen: SwipperIntro
  },
  ShimmerEffect: {
    screen: ShimmerEffect
  },
  Tab: {
    screen: Tab
  },
  Carousel: {
    screen: CarouselScreen
  },
  VectorIcons: {
    screen: VectorIcons
  }
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <RootStack />
    );
  }
}