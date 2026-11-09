import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import NavIcon from './NavIcon';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function BottomNavBar() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View className="absolute bottom-5 self-center w-[90%] h-16 bg-white/95 rounded-2xl shadow-lg border border-slate-100 flex-row justify-around items-center px-2 z-50">
      
      <NavIcon 
        icon="home" 
        label="Beranda" 
        onPress={() => navigation.navigate('Dashboard')} 
      />
      
      <NavIcon 
        icon="receipt-long" 
        label="Transaksi" 
        onPress={() => navigation.navigate('Transaction')} 
      />
      
      <TouchableOpacity className="w-12 h-12 bg-emerald-600 rounded-full items-center justify-center shadow-md -mt-6 border-4 border-slate-50 active:bg-emerald-700">
        <MaterialIcons name="point-of-sale" size={22} color="white" />
      </TouchableOpacity>

      <NavIcon 
        icon="inventory" 
        label="Stok" 
      />
      
      <NavIcon 
        icon="settings" 
        label="Pengaturan" 
        onPress={() => navigation.navigate('Settings')}
      />
      
    </View>
  );
}