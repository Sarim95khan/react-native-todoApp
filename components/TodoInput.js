import { TextInput, Button, View, StyleSheet } from 'react-native';
import { useState } from 'react';

const TodoInput = (props) => {
  const [text, setText] = useState('');

  function enterTodoText(enteredText) {
    setText(enteredText);
  }

  function onPress() {
    props.onTodoAdded(text);
    setText('');
  }
  return (
    <View style={styles.flexforTodo}>
      <TextInput
        style={styles.textInput}
        onChangeText={enterTodoText}
        value={text}
        placeholder="Add your TODO"
      />
      <Button color={'#FF0079FF'} onPress={onPress} title="Add Todo" />
    </View>
  );
};

export default TodoInput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 5,
    padding: 10,
    borderRadius: 100,
    paddingLeft: 15,
    color: '#FF0079FF',
    fontSize: 20,
  },

  flexforTodo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    paddingBottom: 10,
    marginBottom: 10,
  },
});
