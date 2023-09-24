import { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from 'react-native';
import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';

export default function App() {
  const [todosList, setTodosList] = useState([]);

  function addTodoText(text) {
    if (text != '') {
      setTodosList([
        ...todosList,
        { id: Math.random().toString(), message: text },
      ]);
    }
  }

  function deleteHandler(id) {
    setTodosList(todosList.filter((todo) => todo.id != id));
  }

  return (
    <View style={styles.container}>
      <TodoInput onTodoAdded={addTodoText} />

      <View>
        {/* todo list */}
        <Text>TODO LIST</Text>

        <FlatList
          style={styles.todoList}
          data={todosList}
          renderItem={(todoItem) => {
            return (
              <TodoItem
                text={todoItem.item.message}
                id={todoItem.item.id}
                onDelete={deleteHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 10,
  },

  todoList: { height: '84%' },
});
