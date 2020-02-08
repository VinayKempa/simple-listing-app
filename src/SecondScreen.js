import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

export default class SecondScreen extends React.Component {
    static navigationOptions = {
      title: 'Second Screen',
      headerLeft: null
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
          <View style={{
              flex: 1,
              alignItems: "center"
          }}>
            <Button
                title="Go first screen"
                onPress={() => navigate('First')}
            />
          </View>
      );
    }
  }