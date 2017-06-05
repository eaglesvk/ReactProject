/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { 
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Login from './src/login';

export default class ReactProject extends Component {
  render(){
    return (
      <Login />
    );
  }
}

AppRegistry.registerComponent('ReactProject', () => ReactProject);
