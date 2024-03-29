import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Pressable, Modal, FlatList } from 'react-native';
import { Form } from './src/components/Form';
import { Form2 } from './src/components/Form2';
import { FormPractice } from './src/components/FormPractice';
import { SuperHero } from './src/components/SuperHero';
import { User } from './src/components/User';

function App(): JSX.Element {
  const [text, onChangeText] = useState('Text');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalSuperHeroe, setModalSuperHeroe] = useState(false);
  const [modalRegistro, setModalRegistro] = useState(false);
  const [users, setUsers] = useState([]);
  const [form,setForm] = useState(false)


  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>Bienvenido</Text>
      <Pressable
        onPress={() => setTimeout(() => {setModalVisible2(true), 2000})}
        style={styles.btnStyle}>
        <Text style={styles.btnTxtStyle}>iniciar sesión</Text>
      </Pressable>

      <Pressable
        onPress={() => setModalRegistro(true)} style={styles.btnStyle}>
        <Text style={styles.btnTxtStyle}>Registrarme</Text>
      </Pressable>
      

          
      {/* Sección ventana modal */}
      <Modal animationType="slide" visible={modalVisible}>
        <Text>Ventana modal</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </Modal>

      <Pressable
        onPress={() => setModalSuperHeroe(true)} style={styles.btnStyle}>
        <Text style={styles.btnTxtStyle}>SuperHeroe</Text>
      </Pressable>
      <SuperHero modalSuperHero={modalSuperHeroe} setModalSuperHero= {setModalSuperHeroe}></SuperHero>
     
      <Pressable
        onPress={() => setForm(true)} style={styles.btnStyle}>
        <Text style={styles.btnTxtStyle}>Form</Text>
      </Pressable>
      <FormPractice modal={form} setModal={setForm}></FormPractice>

    </View>
  );
};


const styles = StyleSheet.create(
  {
    container: {
      justifyContent: 'center',
      marginHorizontal: 16,
    },
    baseText: {
      fontSize: 25,
      textAlign: 'center',
      fontWeight: '600',
      fontFamily: 'MountainsofChristmas-Regular',
    },
    input: {
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    btnStyle: {
      backgroundColor: '#2437DA',
      padding: 20,
      marginTop: 20,
      marginHorizontal: 10,
      borderRadius: 10
    },
    btnStyleRed: {
      backgroundColor: '#EA4918',
      padding: 20,
      marginTop: 20,
      marginHorizontal: 10,
      borderRadius: 10
    },
    btnTxtStyle: {
      textAlign: 'center',
      color: '#EDEEF4',
      fontSize: 20,
      textTransform: 'capitalize'
    }
  }
)
export default App;