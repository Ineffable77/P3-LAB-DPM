import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TodoItem = ({ todo, onDelete }) => {
  return (
    <View style={styles.todoItem}>
      <Text>{todo.text}</Text>
      <Button title="Delete" onPress={() => onDelete(todo.id)} />
    </View>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
});

export default TodoItem;
