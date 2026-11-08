import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import BottomNavBar from '../components/BottomNavBar';

type TransactionScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Transaction'>;

interface Props {
  navigation: TransactionScreenNavigationProp;
}

export default function TransactionScreen({ navigation }: Props) {
  const TRANSACTIONS = [
    { id: 't1', type: 'IN', title: 'Penjualan Kasir', amount: '+ Rp 125.000', time: '14:30', date: 'Hari ini' },
    { id: 't2', type: 'OUT', title: 'Restock Beras 5kg', amount: '- Rp 375.000', time: '09:15', date: 'Hari ini' },
    { id: 't3', type: 'IN', title: 'Penjualan Kasir', amount: '+ Rp 42.000', time: '20:10', date: 'Kemarin' },
    { id: 't4', type: 'IN', title: 'Penjualan Kasir', amount: '+ Rp 89.500', time: '19:45', date: 'Kemarin' },
    { id: 't5', type: 'OUT', title: 'Bayar Listrik PLN', amount: '- Rp 150.000', time: '08:00', date: 'Kemarin' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-slate-50" edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8fafc" />
      

      <View className="h-14 px-4 flex-row items-center justify-between bg-slate-50 z-50">
        <Text className="text-xl font-bold text-slate-900 tracking-tight">Riwayat Transaksi</Text>
        <TouchableOpacity className="w-10 h-10 items-center justify-center bg-white rounded-full border border-slate-200 shadow-sm">
          <MaterialIcons name="filter-list" size={22} color="#0f172a" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-4 pt-2" contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
        
        <View className="bg-slate-900 rounded-2xl p-5 shadow-sm mb-6 flex-row justify-between items-center">
          <View>
            <Text className="text-slate-400 text-[11px] font-bold tracking-widest uppercase mb-1">Total Pemasukan</Text>
            <Text className="text-emerald-400 font-extrabold text-lg">Rp 12.350.000</Text>
          </View>
          <View className="h-10 w-[1px] bg-slate-700" />
          <View>
            <Text className="text-slate-400 text-[11px] font-bold tracking-widest uppercase mb-1">Total Keluar</Text>
            <Text className="text-rose-400 font-extrabold text-lg">Rp 3.870.000</Text>
          </View>
        </View>

        <View className="bg-white rounded-2xl p-2 shadow-sm border border-slate-200">
          {TRANSACTIONS.map((trx) => (
            <View key={trx.id} className="flex-row items-center justify-between p-3 border-b border-slate-50 last:border-0">
              <View className="flex-row items-center gap-3">
                <View className={`w-10 h-10 rounded-full items-center justify-center ${trx.type === 'IN' ? 'bg-emerald-50' : 'bg-rose-50'}`}>
                  <MaterialIcons 
                    name={trx.type === 'IN' ? 'call-received' : 'call-made'} 
                    size={20} 
                    color={trx.type === 'IN' ? '#059669' : '#e11d48'} 
                  />
                </View>
                <View>
                  <Text className="text-slate-900 font-bold text-sm">{trx.title}</Text>
                  <Text className="text-slate-400 text-[11px] mt-0.5">{trx.date} • {trx.time}</Text>
                </View>
              </View>
              <Text className={`font-black text-sm tracking-tight ${trx.type === 'IN' ? 'text-emerald-600' : 'text-slate-900'}`}>
                {trx.amount}
              </Text>
            </View>
          ))}
        </View>

      </ScrollView>

      <BottomNavBar />
    </SafeAreaView>
  );
}