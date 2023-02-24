import React from 'react'
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native/types'

export const UserInformation = ({user, setUser, setModaluser }) => {
  return (
    <SafeAreaView style = {styles.content}>
        <Text style = {styles.title}>
            Informacion {''}
            <Text style = {styles.title_bold}>Usuario</Text>
        </Text>

        <View>
            <Pressable style = {styles.btnClose} 
            onLongPress = {() => {
                setModaluser(false)
                setUser({})
                }}>
            <Text style = {styles.btn_close_text}>X cerrar</Text>
            </Pressable>
        </View>

        <View style = {styles.content2}>
            <View style = {styles.campo}>
                <Text style = {styles.label}>Nombre:</Text>
                <Text style = {styles.value}>{user.userName}</Text>
            </View>

            <View style = {styles.campo}>
                <Text style = {styles.label}>Email</Text>
                <Text style = {styles.value}>{user.userEmail}</Text>
            </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    content : {
        backgroundColor : '#F59E0B',
        flex : 1
    },
    title : {
        fontSize : 30,
        fontWeight : '600',
        textAlign : 'center',
        marginTop : 30,
        color : '#FFF'
    },
    title_bold : {
        fontWeight : '900'
    },
    btn_close_text : {
        color : '#FFF',
        textAlign : 'center',
        fontWeight : '900',
        fontSize : 16,
        textTransform : 'uppercase'
    },
    btnClose : {
        marginVertical : 30,
        backgroundColor : '#E06900',
        marginHorizontal : 30,
        padding : 15,
        borderRadius : 10,
    },
    content2 : {
        backgroundColor : '#FFF',
        marginHorizontal : 30,
        borderRadius : 10,
        padding : 20,
        shadowColor : '#000',
        shadowOffset : {
            width : 0,
            height : 2
        },
        shadowOpacity: 0.25,
        shadowRadius : 3.84,
        elevation : 5
    },
    label : {
        textTransform : 'uppercase',
        color : '#374115',
        fontWeight : '600',
        fontSize : 12
    },
    value : {
        fontWeight : '700',
        fontSize : 20,
        color : '#334155'
    }

    



})