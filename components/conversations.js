import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import firebase from 'firebase';

export default function ConversationsScreen({ navigation }) {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const conversationsRef = firebase.firestore().collection('conversations');
    conversationsRef.onSnapshot(querySnapshot => {
      const data = [];
      querySnapshot.forEach(doc => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setConversations(data);
    });
  }, []);

  const handleConversationPress = conversation => {
    navigation.navigate('Conversation', { conversation });
  };

  return (
    <View>
      <FlatList
        data={conversations}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleConversationPress(item)}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}