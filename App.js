import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Alert } from "react-native";
import TileBar from "./src/module/TileBar";
import OpenQrCode from "./src/module/openQrCode";
import ItemModule from "./src/module/itemModule";
import color from "./task/color";
export default function App() {
  const [taskList, setTaskList] = useState([]);
  
  const handlerAddTask = (task) => {
    // add task
    setTaskList([...taskList, task]);
  };
  const handlerDeleteTask = (index) => {
    // remove task
    Alert.alert("Thông báo", "Bạn có muốn xóa task này không", [
      {
        text: "Hủy",
        onPress: () => {
          
        },
      },
      {
        text: "Đồng ý",
        onPress: () => {let taskListTmp = [...taskList];
          taskListTmp.splice(index, 1);
          setTaskList(taskListTmp);},
      },
    ]);
  };
  return (
    <ScrollView style={styles.container}>
      <TileBar onAddTask={handlerAddTask}></TileBar>
      <OpenQrCode></OpenQrCode>
      {taskList.map((item, index) => {
        return (
          <ItemModule
            key={index}
            title={item}
            number={index + 1}
            onDeleteTask={() => {
              handlerDeleteTask(index);
            }}
          ></ItemModule>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.backgroud,
  },
});
