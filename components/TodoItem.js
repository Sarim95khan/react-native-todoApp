import { StyleSheet, Text, Pressable } from 'react-native';

const TodoItem = (props) => {
  function deleteHandler() {
    props.onDelete(props.id);
  }

  return (
    <>
      <Pressable onPress={deleteHandler}>
        <Text style={styles.todo}>{props.text}</Text>
      </Pressable>
    </>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  todo: {
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 10,
    textAlign: 'center',
    margin: 3,
    backgroundColor: '#FF0079FF',
    color: 'white',
    borderRadius: 100,
    fontSize: 20,
  },
});
