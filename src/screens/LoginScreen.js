import React, { useState } from 'react';
import { View, Text, TextInput, Button, SafeAreaView } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.replace('Dashboard');
  };

  return (
    <SafeAreaView className="flex-1 bg-white p-6 justify-center">
      <Text className="text-2xl font-bold mb-8">Sistem UMKM</Text>
      
      <View className="mb-4">
        <Text className="mb-1 text-black font-semibold">Username</Text>
        <TextInput 
          className="border border-black p-3 bg-gray-50"
          value={username}
          onChangeText={setUsername}
          placeholder="Masukkan username"
        />
      </View>

      <View className="mb-8">
        <Text className="mb-1 text-black font-semibold">Password</Text>
        <TextInput 
          className="border border-black p-3 bg-gray-50"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          placeholder="Masukkan password"
        />
      </View>

      <Button title="LOGIN" onPress={handleLogin} color="#000000" />
    </SafeAreaView>
  );
}