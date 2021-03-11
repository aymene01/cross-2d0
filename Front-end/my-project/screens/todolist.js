import React from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput} from 'react-native';
import Task from './tasks';

export function todolist() {
    return (
        <View style={styles.container}>

            <View style={styles.taskWrapper}>
            <Text style={styles.sectionTitle}>Today's tasks</Text>

            <View style={styles.items}>
            <Task text={'Task 1'}/>
            <Task text={'Task 2'}/>
            </View>
        </View>

    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={style.writeTaskWrapper}>

        <TextInput style={styles.input} placeholder={'Write a task'}/>
    </KeyboardAvoidingView>


    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED'
    },
    tasksWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 40,
        marginLeft: 20,
    },
    items: {
        marginTop: 30,
    },
})