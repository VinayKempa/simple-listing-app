import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

export default class FirstScreen extends React.Component {
    static navigationOptions = {
      title: 'First Screen',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={{
            flex: 1,
            alignItems: "center"
        }}>
            <Button
                title="Go Second screen"
                onPress={() => navigate('Second')}
                style={{
                    marginTop: 20
                }}
            />
        </View>
      );
    }
  }