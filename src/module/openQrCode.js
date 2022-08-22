import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../../task/style";
import { BarCodeScanner } from "expo-barcode-scanner";

const OpenQrCode = () => {
  
  return (
    <View>
      <TouchableOpacity
        style={styles.buttonQr}
        onPress={()=>{alert("cLICK")}}
      >
        <Text style={styles.instructions}> Click Scan Qr Code</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OpenQrCode;
