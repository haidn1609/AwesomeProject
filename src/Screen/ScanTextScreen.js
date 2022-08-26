import { Text, Image, View, TouchableOpacity, ScrollView } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import * as ImagePicker from "expo-image-picker";

import styles from "../../task/style";

const ScanTextScreen = ({ navigation, route }) => {
  const task = route.params;

  const [image, setImage] = useState('');
  // picImage
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      //allowsEditing: false, crop image = ?
      //aspect: [1, 1], crop image size width/height
      quality: 1,
      //base64: true,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      console.log(result);
      task.onAdd(result.uri);
    }
  };
 
  return (
    <ScrollView style={{ flex: 1, flexDirection: "column" }}>
      <TouchableOpacity
        style={[styles.buttonQr, { margin: 10 }]}
        onPress={() => {
          pickImage();
        }}
      >
        <Text style={styles.instructions}> Pick an image from camera roll</Text>
      </TouchableOpacity>
      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: "100%", height: 500 }}
          resizeMode="contain"
        />
      )}
    </ScrollView>
  );
};

export default ScanTextScreen;
