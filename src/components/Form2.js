import React, { useState } from 'react';
import {
  Alert,
  Modal,
  SafeAreaView,
  TextInput,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import RadioButtonRN from "radio-buttons-react-native"

export const Form2 = ({ modalRegistro, setModalRegistro }) => {
  const users = [
    {
      userName: "Rafael",
      userEmail: "a@a.com",
      birthday: "2002-02-11"
    },
    {
      userName: "Rafael",
      userEmail: "b@b.com",
      birthday: "2002-02-11"
    },
  ]
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [birthday, setBirthday] = useState(new Date());
  const handlerNewUser = () => {
    console.log('Adding new user');
    /* Validamos si los campos del formulario estan sin diligenciar, vacíos */
    if ([userName, birthday, userEmail].includes('')) {
      Alert.alert('Error', 'Campos sin diligenciar', [
        { text: 'Aceptar', onPress: () => console.log('OK Pressed') },
      ]);
      return;
    }
    /* Validar si es un nuevo usuario o es uno existente */
    const new_user = { userName, birthday, userEmail };
    if (userEmail) {
      let userWithEmail = users.find(user => user.userEmail == userEmail)
      
      userWithEmail.userName = new_user.userName
      userWithEmail.birthday = new_user.birthday
    }
    console.log('Message 1', new_user);

    setModalRegistro(!modalRegistro);
    setUserName('');
    setUserEmail('');
    setBirthday(new Date());
  };

  const data = [
    {
      label: 'Masculino'
    },
    {
      label: 'Femenino'
    }
  ];

  const capturaValorNombre = event => {
    console.log("nombre "+event)
    setUserName(event)
  }

  const capturaValorEmail = event => {
    console.log("email "+event)
    setUserEmail(event)
  }

  const capturaValorFecha = event => {
    console.log("fecha " + event)
    setBirthday(event)
  }

  return (
    <Modal animationType="slide" visible={modalRegistro}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {/* Titulo y subtitulo */}
          <Text style={styles.title}>
            Sign Up {''}
            <Text style={styles.subtitle}>User UAM</Text>
          </Text>

          {/* Botón para cerrar ventana modal */}
          <Pressable
            style={styles.exit_window}
            onPress={() => setModalRegistro(!modalRegistro)}>
            <Text style={styles.text_close_window}>X</Text>
          </Pressable>
          {/* Inicio del formulario */}
          <TextInput onChangeText={capturaValorNombre} value={userName} placeholder="Nombre"></TextInput>
          <TextInput onChangeText={capturaValorEmail} value={userEmail} placeholder="Correo"></TextInput>
          <DatePicker
            style={styles.content_date}
            date={birthday}
            locale="es"
            mode="date"
            format="YYYY-MM-DD"
            minDate="1950-01-01"
            maxDate="2016-06-01"
            onDateChange={capturaValorFecha}></DatePicker>

            <RadioButtonRN
              data={data}
              box={false}
              selectedBtn={(e) => console.log(e)}
            />
          
          <Pressable style={styles.btn_user_add} onPress={handlerNewUser}>
            <Text style={styles.text_btn_user_add}>Acept</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  content_date: {
    height: 216,
    width: 310,
  },
  btn_user_add: {
    marginVertical: 30,
    backgroundColor: '#1B5FDF',
    borderRadius: 10,
    padding: 15,
  },
  text_btn_user_add: {
    color: '#FCFCFC',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  exit_window: {
    marginVertical: 10,
    marginHorizontal: 30,
    backgroundColor: '#E2E3E5',
    borderRadius: 10,
    padding: 15,
  },
  text_close_window: {
    color: '#010101',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
  },
});