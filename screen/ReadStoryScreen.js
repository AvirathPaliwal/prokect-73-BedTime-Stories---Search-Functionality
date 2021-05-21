import React from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet,Alert } from 'react-native';
import * as firebase from 'firebase';
import db from '../config.js';
import { SearchBar } from 'react-native-elements';

export default class App extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}
const styles =StyleSheet.create({
  search:{
    
  }
})
