import React, { useState } from "react";
import { Modal, SafeAreaView, StyleSheet, Text, ScrollView, View, TextInput,Pressable } from 'react-native'
import DatePicker from "react-native-modern-datepicker"
import RadioButtonRN from "radio-buttons-react-native"

export const Form = ({ modalVisibleForm }) => {
  const { userName, SetUserName } = useState("")
  const { userLastName, SetuserLastName } = useState("")
  const { email, SetEmail } = useState("")
  const { selectedDate, SetSelectedDate } = useState("")
  const { age, SetAge } = useState(0)
  const data = [
    {
      label: 'Masculino'
    },
    {
      label: 'Femenino'
    }
  ];

  return (
    <Modal animationType="slide" visible={modalVisibleForm}>
      <SafeAreaView style={styles.content}>
        <Text style={styles.title}>Formulario de registro</Text>
        <ScrollView>
          <View>
            <TextInput placeholder="Nombre"
              style={styles.input}
              placeholderTextColor={'#203474'}
              value={userName}
              onChange={SetUserName}>
            </TextInput>

            <TextInput placeholder="Apellido"
              style={styles.input}
              placeholderTextColor={'#203474'}
              value={userLastName}
              onChange={SetuserLastName}>
            </TextInput>

            <TextInput placeholder="Correo Electrónico"
              style={styles.input}
              placeholderTextColor={'#203474'}
              value={email}
              onChange={SetEmail}>
            </TextInput>

            <TextInput placeholder="Edad"
              style={styles.input}
              placeholderTextColor={'#203474'}
              value={age}
              onChange={SetAge}>
            </TextInput>
            <Text style={styles.title}>Género</Text>
            <RadioButtonRN
              data={data}
              box={false}
              selectedBtn={(e) => console.log(e)}
            />

            <DatePicker
              onSelectedChange={selectedDate => SetSelectedDate(selectedDate)}
              value={selectedDate}
            />

            <Pressable
              style={styles.btnStyle}>
              <Text style={styles.btnStyle}>Enviar Información</Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  input: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  semiTitle: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  btnStyle: {
    textAlign: 'center',
    backgroundColor: '#60c910',
    fontSize: 20,
    textTransform: 'capitalize'
  }

})