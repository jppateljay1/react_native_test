
import React, { Component } from 'react';
import {AppRegistry, StyleSheet, TabBarIOS } from 'react-native';

// internal module
import AppNavigator from './app/navigation/AppNavigator'

// external modules
import Icon from 'react-native-vector-icons/FontAwesome'

export default class tryProject extends Component {

  constructor (props) {
    super (props);
    this.state = {
      selectedTab: "tab1"
    }
  }

  render() {
    return (
      <TabBarIOS>

        <Icon.TabBarItemIOS
          selected={this.state.selectedTab === "tab1"}
          title={'TAB 1'}
          iconName="user"
          onPress={() => this.setState({selectedTab: "tab1"})}>
          <AppNavigator initialRoute={{ident: "PeopleIndex"}}/>
        </Icon.TabBarItemIOS>

        <Icon.TabBarItemIOS
          selected={this.state.selectedTab === "tab2"}
          title={'TAB 2'}
          iconName="user"
          onPress={() => this.setState({selectedTab: "tab2"})}>
          <AppNavigator initialRoute={{ident: "PersonShow", 
                        person: {firstName:"Hello", lastName: "World"}}}/>
        </Icon.TabBarItemIOS>

      </TabBarIOS>
    )
  }
}

const styles = StyleSheet.create({
  navigatorStyles: {
  }
});

AppRegistry.registerComponent('tryProject', () => tryProject);
