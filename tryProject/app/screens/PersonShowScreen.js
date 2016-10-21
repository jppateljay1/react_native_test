
import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, ListView, TouchableOpacity} from 'react-native';

// internal modules
import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground'

// external modules
import _ from 'lodash'
import Icon from 'react-native-vector-icons/FontAwesome'

class PersonShowScreen extends Component {
  render() {
    return (
      <ViewContainer>
      <StatusBarBackground />
        <Text style={{marginTop: 100, fontSize: 20}}>{'Person Show Screen'}</Text>
        <Text style={styles.personName}>{_.capitalize(this.props.person.firstName)} {_.capitalize(this.props.person.lastName)}</Text>
      </ViewContainer>
    );
  }
}

const styles = StyleSheet.create({
  personName: {
    marginLeft: 25,
    fontSize: 20
  }
});

module.exports = PersonShowScreen
