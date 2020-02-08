import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={props.removeGoal.bind(this, props.id)}>
            <View style={style.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: "#CCC",
        borderWidth: 1,
        borderColor: "#DDD"
    }
});

export default GoalItem;