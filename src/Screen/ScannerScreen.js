import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import styles from "../../task/style";

const ScannerScreen = ({navigation,route}) => {
  const [hasPermission, sethasPermission] = useState(null);
  const [scanner, setscanner] = useState(false);
  const task = route.params
  //   request camera permission
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      sethasPermission(status === "granted");
    })();
  }, []);
  // when scanner success
  const handlerBarcodeScanner = ({ type, data }) => {
    setscanner(true);
    console.log("Barcode with type " + type + "and data " + data + "scan success");
    task.onAdd(data)
    navigation.navigate("Home")
  };
  // when no have permission or request false
  if (hasPermission == null) {
    return <Text>Requesting for Camera permission</Text>;
  }
  if (hasPermission == false) {
    return <Text>no access camera</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={scanner ? undefined : handlerBarcodeScanner}
          style={StyleSheet.absoluteFillObject}
        />
        {scanner && (
          <TouchableOpacity
            style={styles.buttonQr}
            onPress={() => {
              setscanner(false);
            }}
          >
            <Text style={styles.instructions}> Tap again</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ScannerScreen;
