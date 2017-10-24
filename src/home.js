import React, {Component} from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './components/main';
import Photo from './components/photo';


const Gallery = StackNavigator({
  Home: { screen: Home },
  Photo: { screen: Photo },
});

export default Gallery;