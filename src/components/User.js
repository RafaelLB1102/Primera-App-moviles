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
    <Text>HOLa</Text>
  );
};

const styles = StyleSheet.create({
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
    }
 });