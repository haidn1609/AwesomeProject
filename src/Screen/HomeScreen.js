import React, { useState } from "react";
import {
  Text,
  ScrollView,
  Alert,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import TileBar from "../module/TileBar";
import ItemModule from "../module/itemModule";
import styles from "../../task/style";


const HomeScreen = ({navigation,route}) => {
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
        onPress: () => {},
      },
      {
        text: "Đồng ý",
        onPress: () => {
          let taskListTmp = [...taskList];
          taskListTmp.splice(index, 1);
          setTaskList(taskListTmp);
        },
      },
    ]);
  };
  // set data callback from qr code
  
  const task= route.params
  //
  
  
  return (
   <SafeAreaView style={styles.container}>
     <ScrollView >
      <TileBar onAddTask={handlerAddTask}></TileBar>
      <TouchableOpacity
        style={styles.buttonQr}
        onPress={() => {
          navigation.navigate("Scanner",{onAdd:handlerAddTask});
        }}
      >
        <Text style={styles.instructions}> Click Scan Qr Code</Text>
      </TouchableOpacity>
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
   </SafeAreaView>
  );
};

export default HomeScreen;
