import React, { Component } from 'react';
import { Platform, StyleSheet, 
  Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalInput from './src/components/GoalInput';
import GoalItem from './src/components/GoalItem';

import MyNavigator from './src/navigation/FirstNavigator';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      outputText: "Hello Kempa",
      enteredGoal: "",
      courseGoals: [],
      isAddGoal: false
    }
  }

  addGoals = (goal) => {
    this.setState({
      courseGoals: [...this.state.courseGoals, {
        id: Math.random().toString(), goal: goal
      }],
      isAddGoal: false
    });
  }

  deleteGoal = (id) => {
    this.setState({
      courseGoals: this.state.courseGoals.filter((goal) => {
        return goal.id !== id;
      })
    })
  }

  render() {
    //return <MyNavigator />
    /*
    return (
      <View style={mystyle.wrapper}>
        <Text style={mystyle.text}>{this.state.outputText}</Text>
        <Button title="Change Text" onPress={() => this.setState({outputText: "Hello Vinay Kempa"})}/>
      </View>
    )
    */
   return (
     <View style={style.screen}>
       <Button title="Add Item To List" onPress={() => this.setState({isAddGoal: true})}/>
        {
          (this.state.courseGoals || []).length ? (
            <Text style={{marginTop: 10}}>Tap on item to delete from list</Text>
          ): null
        }
       <GoalInput addCourseGoals={this.addGoals} isAddGoal={this.state.isAddGoal} onCancel={() => this.setState({isAddGoal: false})}/>
       <FlatList 
        keyExtractor={(item, index) => item.id}
        data={(this.state.courseGoals || [])}
        renderItem={itemdata => (
          <GoalItem title={itemdata.item.goal} id={itemdata.item.id} removeGoal={this.deleteGoal}/>
        )}/>
       {/* 
       Using scroll view
       <ScrollView>
         {
           (this.state.courseGoals || []).map((goal, index) => {
             return (
                <View key={`goal_${index}`} style={style.listItem}>
                  <Text>{goal}</Text>
                </View>
             )
           })
         }
       </ScrollView> */}
     </View>
   )
  }
}

const style = StyleSheet.create({
  screen: {
    paddingTop: 50,
    paddingLeft: 10,
    paddingRight: 10
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center"
  },
  input: {
    borderWidth: 1, 
    padding: 10, 
    borderColor: "#DDD",
    width: "85%"
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#CCC",
    borderWidth: 1,
    borderColor: "#DDD"
  }
})

const mystyle = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#6d6d6d",
    fontSize: 20
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Platform.OS == "ios" ? '#F5FCFF' : "blue",
  },
  welcome: {
    fontSize: Platform.OS == "ios" ? 20 : 24,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize: Platform.OS == "ios" ? 20 : 24,
  },
});