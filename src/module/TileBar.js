import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard
} from "react-native";
import styles from "../../task/style";

const TileBar = (props) => {
  const [task, setTask] = React.useState("");
  const onclick = () => {
    props.onAddTask(task);
    setTask('')
    Keyboard.dismiss()
  };
  return (
    <View style={styles.containerTitleBar}>
      <TextInput
      value={task}
        style={styles.TextBox}
        placeholder="input"
        caretHidden
        onChangeText={(text) => setTask(text)}
        onSubmitEditing ={onclick}
      ></TextInput>
      <View style={styles.containerButton}>
        <TouchableOpacity onPress={onclick} style={styles.button}>
          <Text style={styles.instructions}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TileBar;
