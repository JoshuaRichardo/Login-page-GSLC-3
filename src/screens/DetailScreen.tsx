import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { INVENTORY_DATA } from '../data/dummy';

type DetailScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Detail'>;
type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>; // <-- Tambahkan ini

interface Props {
  navigation: DetailScreenNavigationProp;
  route: DetailScreenRouteProp;
}

export default function DetailScreen({ navigation, route }: Props) {
  const { id } = route.params;

  const item = INVENTORY_DATA.find((data) => data.id === id) || INVENTORY_DATA[0];

  return (
    <SafeAreaView className="flex-1 bg-slate-50" edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      <View className="flex-row items-center justify-between p-4 bg-white border-b border-slate-200">
        <TouchableOpacity 
          onPress={() => navigation.goBack()} 
          className="w-10 h-10 items-center justify-center rounded-full active:bg-slate-100"
        >
          <MaterialIcons name="arrow-back" size={24} color="#0f172a" />
        </TouchableOpacity>
        <Text className="text-lg font-bold text-slate-900 tracking-tight">Detail Barang</Text>
        <TouchableOpacity className="w-10 h-10 items-center justify-center">
          <MaterialIcons name="more-vert" size={24} color="#64748b" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-4 pt-6" showsVerticalScrollIndicator={false}>
        <View className="items-center bg-white p-6 rounded-3xl shadow-sm border border-slate-200 mb-5">
          <View className={`w-24 h-24 rounded-full items-center justify-center mb-4 border ${item.isCritical ? 'bg-amber-50 border-amber-200' : 'bg-slate-50 border-slate-200'}`}>
            <MaterialIcons name={item.icon as keyof typeof MaterialIcons.glyphMap} size={48} color={item.isCritical ? "#d97706" : "#64748b"} />
          </View>
          <Text className="text-2xl font-extrabold text-slate-900 text-center tracking-tight">{item.title}</Text>
          <Text className="text-slate-500 mt-1.5 font-bold tracking-widest text-xs">SKU: {item.sku}</Text>
          
          <View className={`mt-4 px-4 py-1.5 rounded-full border ${item.isCritical ? 'bg-amber-100 border-amber-200' : 'bg-emerald-100 border-emerald-200'}`}>
            <Text className={`font-black text-[11px] tracking-wider ${item.isCritical ? 'text-amber-700' : 'text-emerald-700'}`}>
              STATUS: {item.status}
            </Text>
          </View>
        </View>

        <View className="bg-white rounded-3xl p-5 shadow-sm border border-slate-200 mb-8">
          <Text className="font-bold text-slate-900 mb-4 text-base tracking-tight">Informasi Stok & Harga</Text>
          
          <View className="flex-row justify-between py-3.5 border-b border-slate-100">
            <Text className="text-slate-500 font-semibold text-[13px]">Harga Jual</Text>
            <Text className="text-slate-900 font-extrabold text-[14px]">{item.price}</Text>
          </View>
          
          <View className="flex-row justify-between py-3.5 border-b border-slate-100">
            <Text className="text-slate-500 font-semibold text-[13px]">Sisa Stok Gudang</Text>
            <Text className={`font-extrabold text-[14px] ${item.isCritical ? 'text-rose-600' : 'text-emerald-600'}`}>
              {item.desc}
            </Text>
          </View>
          
          <View className="flex-row justify-between py-3.5">
            <Text className="text-slate-500 font-semibold text-[13px]">Terakhir Diperbarui</Text>
            <Text className="text-slate-900 font-bold text-[13px]">{item.lastUpdate}</Text>
          </View>
        </View>
      </ScrollView>

      <View className="p-4 bg-white border-t border-slate-200">
        <TouchableOpacity className="w-full bg-emerald-600 h-14 rounded-2xl flex-row items-center justify-center gap-2 shadow-sm active:bg-emerald-700">
          <MaterialIcons name="add-shopping-cart" size={20} color="white" />
          <Text className="text-white font-extrabold text-[15px] tracking-wide">Restock Barang Ini</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}