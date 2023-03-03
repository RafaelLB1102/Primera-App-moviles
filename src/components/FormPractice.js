import React, {useState} from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Image,
  Pressable,
  SafeAreaView,
  TextInput,
} from "react-native";
export const FormPractice = ({ modal, setModal }) => {
  const [value,setValue] =  useState('Nombre')
  const capturaValor = (event) => {
    console.log(event)
  };
  return (
    <SafeAreaView>
      <Modal visible={modal} animationType="slide">
        <View style={styles.content}>
          <View style={styles.container}>
            <Text style={styles.title}>Formulario</Text>
            <TextInput
              styles={styles.text_font}
              editable
              value={value}
              onChangeText={capturaValor}
            ></TextInput>
          </View>
          <View style={styles.container}>
            <Text style={styles.title}>Formulario</Text>
            <TextInput styles={styles.text_font} editable multiline></TextInput>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#0069A3",
    flex: 1,
  },
  container: {
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
    padding: 10,
    backgroundColor: "#FAFAFA",
    borderRadius: 10,
  },
  title: {
    fontWeight: "bold",
  },
  text_font: {
    fontFamily: "Fira Sans",
  },
});