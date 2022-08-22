import React, { Component } from "react";
import { Text, StyleSheet, View,TouchableOpacity, } from "react-native";
import styles from "../../task/style";

const ItemModule = (props)=>{
  const onClick=()=>{
    props.onDeleteTask()
  }

  return (
    <TouchableOpacity style={styles.containerItem} onPress={onClick}>
      <View style={styles.item}>
        <View style={styles.square}>
          <Text style={styles.numberId}>{props.number}</Text>
        </View>
        <Text style={styles.contentText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}
export default ItemModule;

