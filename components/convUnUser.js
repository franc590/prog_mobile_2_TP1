import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import firebase from 'firebase';

export default function ConversationScreen({ route }) {
  const { conversation } = route.params;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const messagesRef = firebase.firestore().collection('conversations').doc(conversation.id).collection('messages');
    messagesRef.onSnapshot(querySnapshot => {
      const data = [];
      querySnapshot.forEach(doc => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setMessages(data);
    });
  }, [conversation]);

  return (
    <View>
      <Text>{conversation.title}</Text>
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}