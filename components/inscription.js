import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import firebase from "../firebase";
import auth from "@react-native-firebase/auth";


const Inscription = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nomComplet, setnomComplet] = useState('');
  const [cell, setCell] = useState('');

  const inscription = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        const currentUser = firebase.auth().currentUser;
        firebase.firestore().collection('users').doc(currentUser.uid).set({
          nomComplet,
          cell,
          email,
        });
        navigation.navigate('Connexion');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Adresse e-mail :</Text>
      <TextInput style={styles.input} onChangeText={setEmail} value={email} /> 
      <Text style={styles.label}>Mot de passe :</Text>
      <TextInput style={styles.input} secureTextEntry onChangeText={setPassword} value={password} />
      <Text style={styles.label}>Nom Complet :</Text>
      <TextInput style={styles.input} onChangeText={setnomComplet} value={nomComplet} />
      <Text style={styles.label}>Cell :</Text>
      <TextInput style={styles.input} onChangeText={setCell} value={cell} />
      <Button title="S'inscrire" onPress={inscription} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'green',
  },
  input: {
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
});

export default Inscription;