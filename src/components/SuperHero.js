import React from 'react'
import { Modal, SafeAreaView, Image, Text,  StyleSheet, Pressable } from 'react-native';

export const SuperHero = ({modalSuperHero, setModalSuperHero}) => {
  return (
    <SafeAreaView style = {styles.content}>
        <Modal visible={modalSuperHero}>
            <Text style = {styles.title}>SuperHero</Text>
            <Image
              style = {styles.img}
              source={require('./uam.png')}
            />


          <Pressable
            style={styles.exit_window}
            onPress={() => setModalSuperHero(!modalSuperHero)}>
            <Text style={styles.text_close_window}>X</Text>
          </Pressable>
        </Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  img : {
    width: 100,
    height: 200,
    resizeMode: 'contain',
  },
  title : {
    fontSize: 20,
    fontWeight: 'bold'
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
  content : {
    flex : 1
  },
})
