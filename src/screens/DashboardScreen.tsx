import React, { useState, useCallback } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StatusBar, RefreshControl, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { INVENTORY_DATA } from '../data/dummy';
import InventoryRow from '../components/InventoryRow';
import BottomNavBar from '../components/BottomNavBar';

type DashboardScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface Props {
  navigation: DashboardScreenNavigationProp;
}

export default function DashboardScreen({ navigation }: Props) {
  const [showBalance, setShowBalance] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  const filteredInventory = INVENTORY_DATA.filter((item) => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView className="flex-1 bg-slate-50" edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8fafc" />
      
      {/* Header */}
      <View className="h-14 px-4 flex-row items-center justify-between bg-slate-50 z-50">
        <View className="flex-row items-center gap-2">
          <View className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center">
            <Text className="text-white font-bold text-lg">K</Text>
          </View>
          <Text className="text-xl font-bold text-slate-900">Beranda</Text>
        </View>
        <TouchableOpacity className="w-8 h-8 rounded-full bg-slate-200 items-center justify-center">
          <MaterialIcons name="settings" size={18} color="#64748b" />
        </TouchableOpacity>
      </View>

      {/* ScrollView Utama dengan keyboardShouldPersistTaps */}
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        className="flex-1 px-4 pt-2"
        contentContainerStyle={{ paddingBottom: 150 }} 
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        keyboardShouldPersistTaps="handled"
      >
        <View className="bg-slate-900 rounded-2xl p-4 mb-5 flex-row items-center gap-3">
          <View className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center">
            <MaterialIcons name="storefront" size={28} color="#34d399" />
          </View>
          <View>
            <Text className="text-white font-bold text-lg">Toko Makmur Sentosa</Text>
            <Text className="text-slate-400 text-xs">Jln. Raya Krukut No. 14</Text>
          </View>
        </View>

        <View className="bg-white rounded-2xl p-5 border border-slate-200 mb-5">
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-slate-500 text-xs font-bold uppercase tracking-wider">Kas Tersedia</Text>
            <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
              <MaterialIcons name={showBalance ? "visibility" : "visibility-off"} size={18} color="#94a3b8" />
            </TouchableOpacity>
          </View>
          
          <Text className="text-3xl font-extrabold text-slate-900 mb-4">
            {showBalance ? "Rp 8.480.000" : "Rp ••••••••"}
          </Text>
          
          <View className="flex-row bg-slate-50 p-3 rounded-xl border border-slate-100">
            <View className="flex-1">
              <Text className="text-slate-500 text-[10px] font-bold uppercase mb-1">Pemasukan</Text>
              <Text className="text-emerald-600 font-bold text-sm">Rp 12.350.000</Text>
            </View>
            <View className="w-[1px] bg-slate-200 mx-2" />
            <View className="flex-1">
              <Text className="text-slate-500 text-[10px] font-bold uppercase mb-1">Pengeluaran</Text>
              <Text className="text-rose-500 font-bold text-sm">Rp 3.870.000</Text>
            </View>
          </View>
        </View>

        <View className="bg-white rounded-2xl p-5 border border-slate-200 mb-5">
          <Text className="text-slate-900 font-bold text-lg mb-4">Ringkasan Bulan Ini</Text>
          
          <View className="flex-row justify-between mb-3 border-b border-slate-100 pb-2">
            <Text className="text-slate-600 text-sm">Total Transaksi</Text>
            <Text className="text-slate-900 font-bold">142 Trx</Text>
          </View>
          
          <View className="flex-row justify-between mb-3 border-b border-slate-100 pb-2">
            <Text className="text-slate-600 text-sm">Barang Terjual</Text>
            <Text className="text-slate-900 font-bold">350 Item</Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-slate-600 text-sm">Keuntungan Bersih</Text>
            <Text className="text-emerald-600 font-bold">Rp 2.150.000</Text>
          </View>
        </View>

        <View className="bg-white rounded-2xl p-5 border border-slate-200 mb-5">
          <View className="flex-row justify-between items-center mb-4">
            <View>
              <Text className="text-slate-900 font-bold text-lg">Pantau Stok</Text>
              <Text className="text-slate-400 text-xs mt-1">Status barang di gudang</Text>
            </View>
            <TouchableOpacity>
              <Text className="text-emerald-600 font-bold text-xs">Lihat Semua</Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row items-center bg-slate-50 border border-slate-200 rounded-xl px-3 h-11 mb-4">
            <MaterialIcons name="search" size={20} color="#94a3b8" />
            <TextInput
              className="flex-1 ml-2 text-slate-900 text-sm"
              placeholder="Cari stok barang..."
              placeholderTextColor="#94a3b8"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity onPress={() => setSearchQuery('')} className="p-1">
                <MaterialIcons name="close" size={18} color="#94a3b8" />
              </TouchableOpacity>
            )}
          </View>

          {filteredInventory.length > 0 ? (
            filteredInventory.map((item) => (
              <InventoryRow 
                key={item.id}
                icon={item.icon as keyof typeof MaterialIcons.glyphMap} 
                title={item.title} 
                desc={item.desc} 
                status={item.status as 'AMAN' | 'MENIPIS' | 'HABIS'} 
                isCritical={item.isCritical} 
                onPress={() => navigation.navigate('Detail', { id: item.id })} 
              />
            ))
          ) : (
            <View className="py-6 items-center justify-center">
              <Text className="text-slate-400 text-sm font-medium">Barang tidak ditemukan</Text>
            </View>
          )}
          
        </View>
      </ScrollView>

      <BottomNavBar />
    </SafeAreaView>
  );
}