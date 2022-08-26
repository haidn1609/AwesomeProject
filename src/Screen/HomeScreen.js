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
      <TouchableOpacity
        style={[styles.buttonQr,{margin: 10}]}
        onPress={() => {
          navigation.navigate("ScannerText",{onAdd:handlerAddTask});
        }}
      >
        <Text style={styles.instructions}> Click Scan Text</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buttonQr,{margin: 10}]}
        onPress={() => {
          navigation.navigate("OpenCamera",{onAdd:handlerAddTask});
        }}
      >
        <Text style={styles.instructions}> Click OpenCamera</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buttonQr,{margin: 10}]}
        onPress={() => {
          navigation.navigate("ScanDoc");
        }}
      >
        <Text style={styles.instructions}> ScanDoc</Text>
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
