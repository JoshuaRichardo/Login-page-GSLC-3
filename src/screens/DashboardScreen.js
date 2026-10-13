import React from 'react';
import { View, Text, ScrollView, SafeAreaView, Button } from 'react-native';

export default function DashboardScreen({ navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-white p-4">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="text-xl font-bold mb-4 border-b border-black pb-2">
          Dashboard UMKM
        </Text>
        
        <View className="border border-black p-4 mb-4">
          <Text className="font-bold mb-2">KAS KEUANGAN</Text>
          <Text>Total Saldo: Rp 8.480.000</Text>
          <Text>Pemasukan: Rp 18.200.000</Text>
          <Text>Pengeluaran: Rp 9.720.000</Text>
        </View>

        <View className="border border-black p-4 mb-4">
          <Text className="font-bold mb-2">STOK BARANG</Text>
          <Text>- Beras Mentik 5Kg: 24 Sak</Text>
          <Text>- Minyak Goreng 2L: 3 Pcs (Menipis)</Text>
          <Text>- Tepung Terigu 1Kg: 0 Bks (Habis)</Text>
        </View>

        <View className="border border-black p-4 mb-6">
          <Text className="font-bold mb-2">DATA KARYAWAN & GAJI</Text>
          <Text>1. Sri (Kasir) - Rp 1.800.000</Text>
          <Text>2. Anton (Gudang) - Rp 2.200.000</Text>
        </View>

        <Button 
          title="LOGOUT" 
          onPress={() => navigation.replace('Login')} 
          color="#dc2626" 
        />
      </ScrollView>
    </SafeAreaView>
  );
}