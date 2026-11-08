import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface NavIconProps {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  active?: boolean;
  onPress?: () => void;
}

export default function NavIcon({ icon, label, active, onPress }: NavIconProps) {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      className="items-center justify-center min-w-[56px] h-full active:opacity-70"
    >
      <MaterialIcons name={icon} size={22} color={active ? "#0f172a" : "#94a3b8"} />
      <Text className={`text-[9px] mt-1 font-bold ${active ? 'text-slate-900' : 'text-slate-400'}`}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}