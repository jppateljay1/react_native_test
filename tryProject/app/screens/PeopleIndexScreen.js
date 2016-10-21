
import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, ListView, TouchableOpacity} from 'react-native';

// internal modules
import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground'

// external modules
import _ from 'lodash'
import Icon from 'react-native-vector-icons/FontAwesome'


const people = [
  {firstName: "jay", lastName: "patel", roomNumber: 30},
  {firstName: "john", lastName: "doe", roomNumber: 13},
  {firstName: "peter", lastName: "popatlal", roomNumber: 1},
  {firstName: "stephen", lastName: "bova", roomNumber: 2}
]

class PeopleIndexScreen extends Component {
  constructor(props) {
    super(props)
    var ds = new ListView.DataSource ({rowHasChanged: (r1, r2) => r1 != r2});
    this.state = {
      peopleDataSource: ds.cloneWithRows(people)
    } 
  }

  render() {
    return (
      <ViewContainer>
      <StatusBarBackground />
        <ListView
          style={{marginTop: 100}}
          dataSource={this.state.peopleDataSource}
          renderRow={(person) => {return this._renderPersonRow(person)}} />
      </ViewContainer>
    );
  }

  _renderPersonRow (person) {
    return(
      <TouchableOpacity style={styles.personRow} onPress={(event) => this._navigateToPersonShow(person)}>
        <Text style={styles.personName}>{_.capitalize(person.firstName)} {_.capitalize(person.lastName)}</Text>
        <View style={{flex: 1}} />
        <Icon name="chevron-right" size={20} style={styles.personMoreIcon} />
      </TouchableOpacity>
    )
  }

 _navigateToPersonShow(person) {
     this.props.navigator.push({
         ident: "PersonShow",
         person: person // could be used to load data from an API
     });
 } 

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  personRow:{
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 50
  },
  personName: {
    marginLeft: 25,
    fontSize: 20
  },
  personMoreIcon: {
    color: "blue",
    height: 20,
    width: 20,
    marginRight: 30
  }
});

module.exports = PeopleIndexScreen
