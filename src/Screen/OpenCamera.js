import { AutoFocus, Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

import React, { useState, useRef } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function OpenCamera() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [image, setImage] = useState(null);
  const cam = useRef()

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  } //changer front camera
  //get image
  const takeImage = async () => {
    if (cam.current) {
      const options = { quality: 0.5, base64: true, skipProcessing: true };
      let photo = await cam.current.takePictureAsync(options);

      //console.log(cam.current.getSupportedRatiosAsync());

      const source = photo.uri;
      cam.current.pausePreview();
      console.log(source);
      cam.current.resumePreview();
    }
  };
  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        autoFocus={AutoFocus.on}
        ref={cam}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={takeImage}>
            <Text style={styles.text}>Take</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
