import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface InventoryRowProps {
  icon: keyof typeof MaterialIcons.glyphMap;
  title: string;
  desc: string;
  status: 'AMAN' | 'MENIPIS' | 'HABIS';
  isCritical?: boolean;
  onPress?: () => void;
}

export default function InventoryRow({ icon, title, desc, status, isCritical, onPress }: InventoryRowProps) {
  const isAman = status === 'AMAN';
  const isMenipis = status === 'MENIPIS';
  
  return (
    <TouchableOpacity 
      activeOpacity={0.7}
      onPress={onPress}
      className="flex-row items-center justify-between py-3 border-b border-slate-50 last:border-0"
    >
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
    </TouchableOpacity>
  );
}