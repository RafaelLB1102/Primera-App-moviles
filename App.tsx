/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useState} from 'react';
import {Alert, TextInput, SafeAreaView, Text, StyleSheet, Pressable, Modal } from 'react-native'



function App(): JSX.Element {

  const [text, onChangeText] = React.useState('Text');
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView>
      <Text style={styles.baseText}>Hello</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Pressable onPress={() => setModalVisible(!modalVisible)}
        onPressIn={() => { console.log("espichado in") }}
        onLongPress = {() => {console.log("Please release me")}}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          }]}
      >
        <Text>I'm pressable!</Text>
      </Pressable>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
        >
          <Text>Ventana Modal</Text>
      </Modal>
    </SafeAreaView>

  );
}


const styles = StyleSheet.create({
  baseText: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: 'Cochin',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});


function onPressFunction() {
  console.log("Click");

}

export default App;
