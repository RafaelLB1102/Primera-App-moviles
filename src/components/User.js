import React from "react";
import { Pressable, View, StyleSheet, Text } from "react-native";

export const User = (
  user_item,
  setModalVisible,
  setUser,
  userEdit,
  userDelete,
  setModalUser
) => {
  const { userName, userEmail, birthday } = user_item;
  
  return (
    <Pressable
      onLongPress={() => {
        setModalUser(true);
        setUser(user_item);
      }}
    >
      <View style={styles.content}>
        <Text style={styles.label}>Usuario:</Text>
        <Text tyle={styles.text}>{userName}</Text>
        <Text tyle={styles.text}>{userEmail}</Text>
        <Text tyle={styles.date_b}>{birthday}</Text>
      </View>
      <Pressable style={[styles.btn, styles.btnEdit]} onLongPress={() => {
        set
      }} >

      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    content: {
      backgroundColor: '#FFF',
      padding: 20,
      borderBottomColor: '#94a3B8',
      borderBottomWidth: 1,
    },
    label: {
      color: '#374151',
      textTransform: 'uppercase',
      fontWeight: '700',
      marginBottom: 10,
    },
    text : {
        color : "#6D28D9",
        fontSize : 24,
        fontWeight : '700',
        marginBottom : 10
    },
    date_b : {
        color : "#374151"
    } ,
    btn : {
        paddingVertical : 5,
        paddingHorizontal : 20,
        borderRadius : 5
    },
    btnEdit : {
        backgroundColor : "#F59E0B"

    },
    btnDelete : {
        backgroundColor : "#EF4444"
    },
    btnText : {
        textTransform : 'uppercase',
        fontWeight : '700',
        fontSize : 12,
        color : '#FFF'
    }
  });