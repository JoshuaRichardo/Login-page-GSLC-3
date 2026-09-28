import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Platform } from 'react-native';

export default function App() {
  const [inputUser, setInputUser] = useState('');
  const [inputPass, setInputPass] = useState('');

  const tombolLoginDitekan = () => {
    if (inputUser == '' || inputPass == '') {
      if (Platform.OS === 'web') {
        alert('Waduh, Jangan dikosongin username dan passwordnya');
      } else {
        Alert.alert('Waduh', 'Jangan dikosongin username dan passwordnya');
      }
      return;
    }
    
    if (Platform.OS === 'web') {
      alert('sip, Selamat datang ' + inputUser);
    } else {
      Alert.alert('sip', 'Selamat datang ' + inputUser);
    }
  };

  return (
    <View style={styles.main}>
      <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 20 }}>
        Halaman Login
      </Text>
      
      <View style={styles.bungkusForm}>
        <TextInput
          style={styles.kotakInput}
          placeholder="Ketik Username..."
          value={inputUser}
          onChangeText={(text) => setInputUser(text)}
        />
        
        <TextInput
          style={styles.kotakInput}
          placeholder="Ketik Password..."
          value={inputPass}
          onChangeText={setInputPass}
          secureTextEntry={true}
        />
        
        <View style={{ marginTop: 10 }}>
          <Button title="Masuk" onPress={tombolLoginDitekan} color="#0066cc" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    padding: 20,
    backgroundColor: '#f5f5f5', 
  },
  bungkusForm: {
    width: '100%',
    maxWidth: 350, 
  },
  kotakInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: 'white'
  },
});