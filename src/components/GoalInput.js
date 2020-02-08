import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState("");
    function handleGoleInput(goal){
        setEnteredGoal(goal);
    }

    function addGoalHandler() {
        props.addCourseGoals(enteredGoal);
        setEnteredGoal('');
    }
    return (
        <Modal visible={props.isAddGoal} animationType="fade">
            <View style={style.inputContainer}>
                <TextInput 
                placeholder="New list item" 
                style={style.input}
                value={enteredGoal}
                autoFocus={true}
                onChangeText={handleGoleInput}/>
                {/* <Button title="ADD" onPress={props.addCourseGoals.bind(this, enteredGoal)}/> */}
                <View style={style.buttoncontainer}>
                    <Button title="Cancel" onPress={props.onCancel} color="red" style={style.actionButton}/>
                    <Button title="ADD" onPress={addGoalHandler} style={style.actionButton}/>
                </View>
            </View>
        </Modal>
    )
}

const style = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        marginLeft: 15,
        marginRight: 15
    },
    input: {
        borderWidth: 1, 
        padding: 10, 
        borderColor: "#6d6d6d",
        marginBottom: 10
    },
    buttoncontainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center"
    },
    actionButton: {
        width: 200
    }
});

export default GoalInput;