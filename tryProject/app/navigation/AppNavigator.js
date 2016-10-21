
// handles all the navigaton for the app

import React, { Component } from 'react';
import { StyleSheet, Text, View, Navigator } from 'react-native';

// internal module
import PeopleIndexScreen from '../screens/PeopleIndexScreen'
import PersonShowScreen from '../screens/PersonShowScreen'

class AppNavigator extends Component {

  _renderScene(route, navigator) {

    // gets passed into each screen to reference it back
    var globalNavigatorProps = {navigator}

    switch(route.ident) {
      case "PeopleIndex":
      return(
        <PeopleIndexScreen {...globalNavigatorProps} />
      )
      
      case "PersonShow":
      return(
        <PersonShowScreen {...globalNavigatorProps}
          person={route.person} /> // pass in the person, so the PersonShowScreen can use it with this.props.person
      )

      default: // kind of like 404, if nothing exist, then back to home page
        return(
          <Text style={styles.wrongPageStyle}>{'Yo you messed something up'}</Text>
        )
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={this.props.initialRoute}
        ref="appNavigator"
        style={styles.navigatorStyles}
        renderScene={this._renderScene} />
    );
  }

}

const styles = StyleSheet.create({
  navigatorStyles: {

  },
  wrongPageStyle: {
    marginTop: 40
  }
});

module.exports = AppNavigator;
