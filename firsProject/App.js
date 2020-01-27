/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View } from 'react-native';
import Navigation from "./Navigation";

export  class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "red" }}>
        <Navigation/>
      </View>
    );
  }
}
