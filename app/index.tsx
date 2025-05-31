import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";
import React, { useState } from "react";

export default function index() {
  const [displayModal,setDisplayModal]=useState(true)
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity style={styles.btnStyle} onPress={()=>setDisplayModal((prev)=>!prev)}>
        <Text style={styles.textStyle}>Open Modal</Text>
      </TouchableOpacity>
      <Modal visible={displayModal} transparent={true} animationType={'slide'}>
        <View style={{ width: '100%', height: 400, backgroundColor: "blue",top:400 }}>
          <TouchableOpacity onPress={()=>setDisplayModal((prev)=>!prev)}>
             <Text style={{fontSize:32,color:'white'}}>X</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  btnStyle: {
    width: 200,
    height: 40,
    borderWidth: 2,
    backgroundColor: "skyblue",
    borderRadius: 20,
  },
  textStyle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
