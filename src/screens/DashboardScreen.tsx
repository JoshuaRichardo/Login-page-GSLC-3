import React, { useState, useCallback } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StatusBar, RefreshControl, LayoutAnimation, UIManager, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import Svg, { Path, Circle, Line, Defs, LinearGradient, Stop, Text as SvgText } from 'react-native-svg';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type DashboardScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Dashboard'>;

interface Props {
  navigation: DashboardScreenNavigationProp;
}

interface InventoryRowProps {
  icon: keyof typeof MaterialIcons.glyphMap;
  title: string;
  desc: string;
  status: 'AMAN' | 'MENIPIS' | 'HABIS';
  isCritical?: boolean;
}

interface NavIconProps {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  active?: boolean;
}

export default function DashboardScreen({ navigation }: Props) {
  const [showBalance, setShowBalance] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  }, []);

  const toggleBalance = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setShowBalance(!showBalance);
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-50" edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8fafc" />
      
      <View className="h-14 px-4 flex-row items-center justify-between bg-slate-50 z-50">
        <View className="flex-row items-center gap-2">
          <View className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center shadow-sm">
            <Text className="text-white font-bold text-lg">K</Text>
          </View>
          <Text className="text-xl font-bold text-slate-900 tracking-tight">Beranda</Text>
        </View>
        <View className="flex-row items-center gap-1">
          <TouchableOpacity className="w-10 h-10 items-center justify-center active:opacity-70">
            <MaterialIcons name="help-outline" size={24} color="#64748b" />
          </TouchableOpacity>
          <View className="w-8 h-8 rounded-full bg-emerald-600 items-center justify-center border-2 border-white shadow-sm">
            <MaterialIcons name="person" size={18} color="white" />
          </View>
        </View>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false} 
        className="flex-1 px-4 pt-2"
        contentContainerStyle={{ paddingBottom: 100 }} 
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#059669']} />
        }
      >
        <View className="bg-slate-900 rounded-2xl p-4 shadow-lg mb-5 overflow-hidden relative border border-slate-800">
          <View className="absolute -right-10 -bottom-10 w-40 h-40 bg-emerald-500/20 rounded-full opacity-50 blur-2xl" />
          
          <View className="flex-row justify-between items-start z-10">
            <View className="flex-row items-center gap-3">
              <View className="w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center border border-slate-700">
                <MaterialIcons name="storefront" size={28} color="#34d399" />
              </View>
              <View>
                <View className="flex-row items-center gap-1">
                  <Text className="text-white font-bold text-lg tracking-wide">Toko Makmur Sentosa</Text>
                  <MaterialIcons name="verified" size={16} color="#34d399" />
                </View>
                <Text className="text-slate-400 text-[11px] mt-0.5">Jln. Raya Krukut No. 14 • Buka</Text>
                <View className="flex-row items-center gap-1.5 mt-2">
                  <View className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <Text className="text-emerald-400 text-[9px] font-bold uppercase tracking-widest">Sinkronisasi Aktif</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 mb-5">
          <View className="flex-row justify-between items-center mb-2">
            <View className="flex-row items-center gap-2">
              <Text className="text-slate-500 text-[11px] font-bold uppercase tracking-widest">Kas Tersedia</Text>
              <TouchableOpacity onPress={toggleBalance} className="p-1">
                <MaterialIcons name={showBalance ? "visibility" : "visibility-off"} size={18} color="#94a3b8" />
              </TouchableOpacity>
            </View>
            <View className="bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-full">
              <Text className="text-slate-500 text-[9px] font-bold tracking-wider">REAL-TIME</Text>
            </View>
          </View>
          
          <Text className="text-3xl font-extrabold text-slate-900 tracking-tighter">
            {showBalance ? "Rp 8.480.000" : "Rp ••••••••"}
          </Text>
          
          <View className="flex-row items-center gap-1.5 mt-1.5">
            <View className="flex-row items-center bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
              <MaterialIcons name="arrow-upward" size={12} color="#059669" />
              <Text className="text-emerald-700 text-[11px] font-bold ml-0.5">+14.2%</Text>
            </View>
            <Text className="text-slate-400 text-[11px]">vs kemarin (+Rp 1.05M)</Text>
          </View>

          <View className="flex-row gap-3 mt-5 bg-slate-50 p-3 rounded-xl border border-slate-100">
            <View className="flex-1">
              <View className="flex-row items-center gap-1.5 mb-1">
                <View className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <Text className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">Pemasukan</Text>
              </View>
              <Text className="text-emerald-700 font-bold text-base tracking-tight">Rp 12.350.000</Text>
            </View>
            <View className="w-[1px] bg-slate-200" />
            <View className="flex-1 pl-1">
              <View className="flex-row items-center gap-1.5 mb-1">
                <View className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                <Text className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">Pengeluaran</Text>
              </View>
              <Text className="text-rose-600 font-bold text-base tracking-tight">Rp 3.870.000</Text>
            </View>
          </View>

          <View className="flex-row gap-3 mt-4">
            <TouchableOpacity className="flex-1 bg-slate-900 h-12 rounded-xl flex-row items-center justify-center gap-2 shadow-sm active:opacity-80">
              <MaterialIcons name="add" size={20} color="white" />
              <Text className="text-white font-bold text-sm">Catat Kasir</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 mb-5">
          <View className="flex-row justify-between items-start mb-6">
            <View>
              <Text className="text-slate-900 font-bold text-lg tracking-tight">Arus Kas & Omzet</Text>
              <Text className="text-slate-400 text-[11px] mt-0.5">Grafik performa 6 bulan terakhir</Text>
            </View>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="w-full h-[160px]">
            <View style={{ width: 340, height: 160 }}>
              <Svg width="100%" height="140" viewBox="0 0 340 140">
                <Defs>
                  <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                    <Stop offset="0%" stopColor="#059669" stopOpacity="0.25" />
                    <Stop offset="100%" stopColor="#059669" stopOpacity="0" />
                  </LinearGradient>
                </Defs>
                
                <Line x1="35" y1="20" x2="330" y2="20" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                <Line x1="35" y1="55" x2="330" y2="55" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                <Line x1="35" y1="90" x2="330" y2="90" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                <Line x1="35" y1="120" x2="330" y2="120" stroke="#e2e8f0" strokeWidth="1" />
                
                <SvgText x="5" y="24" fill="#94a3b8" fontSize="9" fontWeight="bold">15M</SvgText>
                <SvgText x="5" y="59" fill="#94a3b8" fontSize="9" fontWeight="bold">10M</SvgText>
                <SvgText x="10" y="94" fill="#94a3b8" fontSize="9" fontWeight="bold">5M</SvgText>
                <SvgText x="16" y="123" fill="#94a3b8" fontSize="9" fontWeight="bold">0</SvgText>

                <Path d="M 45 68 C 75 62, 85 52, 100 50 C 120 48, 140 70, 160 70 C 180 70, 200 40, 215 38 C 240 36, 255 35, 270 34 C 290 33, 305 23, 315 22 L 315 120 L 45 120 Z" fill="url(#grad)" />
                <Path d="M 45 68 C 75 62, 85 52, 100 50 C 120 48, 140 70, 160 70 C 180 70, 200 40, 215 38 C 240 36, 255 35, 270 34 C 290 33, 305 23, 315 22" fill="none" stroke="#059669" strokeWidth="3" strokeLinecap="round" />
                
                <Circle cx="45" cy="68" r="4" fill="white" stroke="#059669" strokeWidth="2.5" />
                <Circle cx="100" cy="50" r="4" fill="white" stroke="#059669" strokeWidth="2.5" />
                <Circle cx="160" cy="70" r="4" fill="white" stroke="#059669" strokeWidth="2.5" />
                <Circle cx="215" cy="38" r="4" fill="white" stroke="#059669" strokeWidth="2.5" />
                <Circle cx="270" cy="34" r="4" fill="white" stroke="#059669" strokeWidth="2.5" />
                <Circle cx="315" cy="22" r="5" fill="#059669" stroke="white" strokeWidth="2.5" />
              </Svg>

              <View className="flex-row justify-between pl-9 pr-2 mt-1">
                <Text className="text-slate-400 text-[10px] font-bold">Mei</Text>
                <Text className="text-slate-400 text-[10px] font-bold">Jun</Text>
                <Text className="text-slate-400 text-[10px] font-bold">Jul</Text>
                <Text className="text-slate-400 text-[10px] font-bold">Ags</Text>
                <Text className="text-slate-400 text-[10px] font-bold">Sep</Text>
                <Text className="text-emerald-700 text-[10px] font-extrabold">Okt</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        <View className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 mb-5">
          <View className="flex-row justify-between items-center mb-3 pb-3 border-b border-slate-100">
            <View>
              <Text className="text-slate-900 font-bold text-lg tracking-tight">Pantau Stok</Text>
              <Text className="text-slate-400 text-[11px] mt-0.5">Kebutuhan perputaran cepat</Text>
            </View>
            <TouchableOpacity className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
              <Text className="text-slate-700 font-bold text-[11px]">Lihat Semua</Text>
            </TouchableOpacity>
          </View>

          <InventoryRow icon="rice-bowl" title="Beras Rojolele 5kg" desc="Sisa 42 Karung" status="AMAN" />
          <InventoryRow icon="water-drop" title="Minyak Goreng Kita 2L" desc="Sisa 5 Pouch" status="MENIPIS" isCritical />
          <InventoryRow icon="shopping-bag" title="Tepung Segitiga Biru" desc="Stok Habis (0 Dus)" status="HABIS" isCritical />
        </View>

      </ScrollView>

      <View className="absolute bottom-5 self-center w-[90%] h-16 bg-white/95 rounded-2xl shadow-lg border border-slate-100 flex-row justify-around items-center px-2">
        <NavIcon icon="home" label="Beranda" active />
        <NavIcon icon="receipt-long" label="Transaksi" />
        <View className="w-12 h-12 bg-slate-900 rounded-full items-center justify-center shadow-md -mt-6 border-4 border-slate-50">
          <MaterialIcons name="qr-code-scanner" size={22} color="white" />
        </View>
        <NavIcon icon="inventory" label="Stok" />
        <NavIcon icon="settings" label="Pengaturan" />
      </View>
    </SafeAreaView>
  );
}

function InventoryRow({ icon, title, desc, status, isCritical }: InventoryRowProps) {
  const isAman = status === 'AMAN';
  const isMenipis = status === 'MENIPIS';
  
  return (
    <View className="flex-row items-center justify-between py-3 border-b border-slate-50 last:border-0">
      <View className="flex-row items-center gap-3 flex-1 pr-2">
        <View className={`w-10 h-10 rounded-xl items-center justify-center ${isAman ? 'bg-slate-50 border border-slate-100' : isMenipis ? 'bg-amber-50 border border-amber-100' : 'bg-rose-50 border border-rose-100'}`}>
          <MaterialIcons name={icon} size={20} color={isAman ? "#64748b" : isMenipis ? "#d97706" : "#e11d48"} />
        </View>
        <View className="flex-1">
          <Text className="text-slate-800 font-bold text-sm tracking-tight" numberOfLines={1}>{title}</Text>
          <Text className={`text-[11px] mt-0.5 ${isCritical ? 'text-rose-500 font-bold' : 'text-slate-400'}`}>
            {desc}
          </Text>
        </View>
      </View>
      <View className={`px-2.5 py-1 rounded-md border ${isAman ? 'bg-emerald-50 border-emerald-100' : isMenipis ? 'bg-amber-50 border-amber-100' : 'bg-rose-50 border-rose-100'}`}>
        <Text className={`text-[9px] font-extrabold uppercase tracking-wider ${isAman ? 'text-emerald-700' : isMenipis ? 'text-amber-700' : 'text-rose-700'}`}>{status}</Text>
      </View>
    </View>
  );
}

function NavIcon({ icon, label, active }: NavIconProps) {
  return (
    <TouchableOpacity className="items-center justify-center min-w-[56px] h-full active:opacity-70">
      <MaterialIcons name={icon} size={22} color={active ? "#0f172a" : "#94a3b8"} />
      <Text className={`text-[9px] mt-1 font-bold ${active ? 'text-slate-900' : 'text-slate-400'}`}>{label}</Text>
    </TouchableOpacity>
  );
}