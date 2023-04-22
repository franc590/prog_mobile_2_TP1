import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import firebase from 'firebase';

const Connexion = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const connexion = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('Conversations');
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
      <Button title="Se connecter" onPress={connexion} />
      <Button title="S'inscrire" onPress={() => navigation.navigate('Inscription')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00FF00',
  },
  label: {
    color: '#fff',
  },
  input: {
    backgroundColor: '#fff',
    width: '80%',
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default Connexion;