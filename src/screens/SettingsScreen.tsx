import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import BottomNavBar from '../components/BottomNavBar';

type SettingsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface Props {
  navigation: SettingsScreenNavigationProp;
}

export default function SettingsScreen({ navigation }: Props) {
  const handleLogout = () => {
    Alert.alert(
      "Keluar Akun",
      "Apakah kamu yakin ingin keluar?",
      [
        { text: "Batal", style: "cancel" },
        { 
          text: "Keluar", 
          style: "destructive",
          onPress: () => navigation.replace('Login')
        }
      ]
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-50" edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8fafc" />
      
      <View className="h-14 px-4 justify-center bg-slate-50 border-b border-slate-100">
        <Text className="text-xl font-bold text-slate-900">Pengaturan</Text>
      </View>

      <ScrollView className="flex-1 px-4 pt-5" contentContainerStyle={{ paddingBottom: 100 }}>
        
        <View className="bg-white rounded-2xl p-4 flex-row items-center gap-4 border border-slate-200 mb-6 shadow-sm">
          <View className="w-16 h-16 rounded-full bg-emerald-100 items-center justify-center">
            <MaterialIcons name="person" size={32} color="#059669" />
          </View>
          <View className="flex-1">
            <Text className="text-lg font-bold text-slate-900">Kasir UMKM</Text>
            <Text className="text-slate-500 text-sm">kasir@tokomakmur.com</Text>
          </View>
          <TouchableOpacity className="p-2 bg-slate-50 rounded-full border border-slate-200">
            <MaterialIcons name="edit" size={18} color="#64748b" />
          </TouchableOpacity>
        </View>

        <Text className="text-slate-500 font-bold text-[11px] tracking-wider mb-2 ml-2">PREFERENSI APLIKASI</Text>
        
        <View className="bg-white rounded-2xl border border-slate-200 mb-8 overflow-hidden shadow-sm">
          <TouchableOpacity className="flex-row items-center justify-between p-4 border-b border-slate-100">
            <View className="flex-row items-center gap-3">
              <MaterialIcons name="language" size={22} color="#64748b" />
              <Text className="text-slate-700 font-medium">Bahasa</Text>
            </View>
            <View className="flex-row items-center gap-1">
              <Text className="text-slate-400 text-sm">Indonesia</Text>
              <MaterialIcons name="chevron-right" size={20} color="#cbd5e1" />
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity className="flex-row items-center justify-between p-4 border-b border-slate-100">
            <View className="flex-row items-center gap-3">
              <MaterialIcons name="notifications-none" size={22} color="#64748b" />
              <Text className="text-slate-700 font-medium">Notifikasi</Text>
            </View>
            <MaterialIcons name="chevron-right" size={20} color="#cbd5e1" />
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center justify-between p-4">
            <View className="flex-row items-center gap-3">
              <MaterialIcons name="help-outline" size={22} color="#64748b" />
              <Text className="text-slate-700 font-medium">Bantuan & FAQ</Text>
            </View>
            <MaterialIcons name="chevron-right" size={20} color="#cbd5e1" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          onPress={handleLogout}
          className="bg-rose-50 border border-rose-200 rounded-2xl h-14 flex-row items-center justify-center gap-2 mb-4 active:bg-rose-100"
        >
          <MaterialIcons name="logout" size={20} color="#e11d48" />
          <Text className="text-rose-600 font-bold text-base">Keluar Akun</Text>
        </TouchableOpacity>
        
        <Text className="text-center text-slate-400 text-xs mt-2">Mini Payroll UMKM v1.0.0</Text>

      </ScrollView>

      <BottomNavBar />
    </SafeAreaView>
  );
}