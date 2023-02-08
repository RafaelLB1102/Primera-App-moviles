import React, { useState } from "react";
import {Modal, SafeAreaView, StyleSheet, Text, ScrollView, View, TextInput} from 'react-native'
import DatePicker from "react-native-modern-datepicker"


export const Form = ({modalVisibleForm}) => {
    const {userName,SetUserName} = useState("")
    const {email,SetEmail} = useState("")
    const {selectedDate, SetSelectedDate} = useState("")
    const {age,SetAge} = useState(0)


    return (
      <Modal animationType="slide" visible={modalVisibleForm}>
        <SafeAreaView style={styles.content}>
          <Text>Formulario de registro</Text>
          <ScrollView>
              <View>
                <TextInput placeholder="Nombre de Usuario"
                  placeholderTextColor={'#203474'}
                  value = {userName}
                  onChange = {SetUserName}>
                </TextInput>

                <TextInput placeholder="Correo Electrónico"
                  placeholderTextColor={'#203474'}
                  value = {email}
                  onChange = {SetEmail}>
                </TextInput>

                <TextInput placeholder="Edad"
                  placeholderTextColor={'#203474'}
                  value = {age}
                  onChange = {SetAge}>
                </TextInput>

                <DatePicker
                    onSelectedChange={date => SetSelectedDate(date)}
                />
              </View>
          </ScrollView>
        </SafeAreaView>
      </Modal>
    );
  };

const styles = StyleSheet.create({
  content : {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  }

})