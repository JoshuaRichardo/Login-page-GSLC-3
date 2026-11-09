import React, { useState, useCallback } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StatusBar, RefreshControl } from 'react-native';
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

  // fungsi buat pull to refresh
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-slate-50" edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8fafc" />
      
      <View className="h-14 px-4 flex-row items-center justify-between bg-slate-50 z-50">
        <View className="flex-row items-center gap-2">
          <View className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center">
            <Text className="text-white font-bold text-lg">K</Text>
          </View>
          <Text className="text-xl font-bold text-slate-900">Beranda</Text>
        </View>
        <TouchableOpacity className="w-8 h-8 rounded-full bg-emerald-600 items-center justify-center">
          <MaterialIcons name="person" size={18} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false} 
        className="flex-1 px-4 pt-2"
        contentContainerStyle={{ paddingBottom: 100 }} 
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
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
            <Text className="text-slate-500 text-xs font-bold">KAS TERSEDIA</Text>
            <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
              <MaterialIcons name={showBalance ? "visibility" : "visibility-off"} size={18} color="#94a3b8" />
            </TouchableOpacity>
          </View>
          
          <Text className="text-3xl font-extrabold text-slate-900">
            {showBalance ? "Rp 8.480.000" : "Rp ••••••••"}
          </Text>
          
          <View className="flex-row gap-3 mt-5 bg-slate-50 p-3 rounded-xl border border-slate-100">
            <View className="flex-1">
              <Text className="text-slate-500 text-[10px] font-bold">PEMASUKAN</Text>
              <Text className="text-emerald-700 font-bold text-sm">Rp 12.350.000</Text>
            </View>
            <View className="w-[1px] bg-slate-200" />
            <View className="flex-1 pl-1">
              <Text className="text-slate-500 text-[10px] font-bold">PENGELUARAN</Text>
              <Text className="text-rose-600 font-bold text-sm">Rp 3.870.000</Text>
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
          <View className="flex-row justify-between items-center mb-3 pb-3 border-b border-slate-100">
            <View>
              <Text className="text-slate-900 font-bold text-lg">Pantau Stok</Text>
              <Text className="text-slate-400 text-xs mt-1">Status barang di gudang</Text>
            </View>
            <TouchableOpacity>
              <Text className="text-emerald-600 font-bold text-xs">Lihat Semua</Text>
            </TouchableOpacity>
          </View>

          {INVENTORY_DATA.map((item) => (
            <InventoryRow 
              key={item.id}
              icon={item.icon as keyof typeof MaterialIcons.glyphMap} 
              title={item.title} 
              desc={item.desc} 
              status={item.status as 'AMAN' | 'MENIPIS' | 'HABIS'} 
              isCritical={item.isCritical} 
              onPress={() => navigation.navigate('Detail', { id: item.id })} 
            />
          ))}
          
        </View>

      </ScrollView>

      <BottomNavBar />
    </SafeAreaView>
  );
}