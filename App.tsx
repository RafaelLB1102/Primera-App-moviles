import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Pressable, Modal, FlatList } from 'react-native';
import { Form } from './src/components/Form';
import { Form2 } from './src/components/Form2';
import { SuperHero } from './src/components/SuperHero';
import { User } from './src/components/User';

function App(): JSX.Element {
  const [text, onChangeText] = useState('Text');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalSuperHeroe, setModalSuperHeroe] = useState(false);
  const [modalRegistro, setModalRegistro] = useState(false);
  const [users, setUsers] = useState([]);


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
      <Form2 modalRegistro={modalRegistro} setModalRegistro= {setModalRegistro} users = {users}></Form2>
      {
        users.length === 0 ? 
          <Text>No hay usuarios aun</Text> 
          :<FlatList data = {users} renderItem = {({item}) => {
            return (<User user_item={user_item}></User>)
          }}/>
     }
          
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
     
    </View>
  );
};


const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
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