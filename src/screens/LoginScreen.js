import React, { useState } from 'react';
import { 
  View, Text, TextInput, TouchableOpacity, StatusBar, 
  ScrollView, KeyboardAvoidingView, Platform, 
  TouchableWithoutFeedback, Keyboard, ActivityIndicator 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('0812-9844-8821');
  const [password, setPassword] = useState('882104');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  
  const [focusedInput, setFocusedInput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    Keyboard.dismiss();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      navigation.replace('Dashboard');
    }, 1200);
  };

  const setQuickProfile = (user, pass) => {
    setUsername(user);
    setPassword(pass);
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-50" edges={['top', 'bottom']}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8fafc" />
      
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
            
            {/* 1. HEADER / BRANDING PANEL */}
            <View className="w-full bg-slate-900 rounded-2xl p-5 shadow-lg mt-6 mb-5 relative overflow-hidden border border-slate-800">
              <View className="absolute -right-8 -top-8 w-36 h-36 rounded-full bg-emerald-500/20 blur-2xl" />
              <View className="absolute -left-10 bottom-0 w-32 h-32 rounded-full bg-emerald-400/10 blur-xl" />
              
              <View className="relative z-10 flex-col gap-4">
                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center gap-3">
                    <View className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center shadow-md">
                      <MaterialIcons name="inventory-2" size={26} color="white" />
                    </View>
                    <View>
                      <Text className="font-extrabold text-xl text-white tracking-tight">Kas & Stok</Text>
                      <Text className="text-[9px] font-extrabold uppercase text-emerald-400 tracking-widest mt-0.5">Warung OS • UMKM</Text>
                    </View>
                  </View>
                  <View className="flex-row items-center gap-1.5 bg-slate-800 px-2.5 py-1 rounded-full border border-slate-700">
                    <View className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <Text className="text-[9px] font-bold text-slate-300 uppercase tracking-wider">Online</Text>
                  </View>
                </View>

                <View className="flex-col">
                  <Text className="text-slate-200 text-[13px] font-semibold tracking-wide">Sistem Pembukuan & Kelola Stok.</Text>
                  <Text className="text-slate-400 text-[11px] mt-1 leading-relaxed">Cepat, akurat, dan dirancang untuk layar sentuh kasir harian.</Text>
                </View>

                <View className="flex-row items-center gap-1.5 bg-slate-800/80 rounded-lg px-3 py-2 self-start border border-slate-700 mt-1">
                  <MaterialIcons name="storefront" size={14} color="#34d399" />
                  <Text className="text-[11px] font-bold text-slate-200">Mode Demo: Makmur Sentosa</Text>
                  <View className="bg-emerald-600 px-1.5 py-0.5 rounded ml-1 shadow-sm">
                    <Text className="text-[9px] font-bold text-white">W-8821</Text>
                  </View>
                </View>
              </View>
            </View>

            {/*LOGIN FORM*/}
            <View className="bg-white rounded-3xl p-5 shadow-sm border border-slate-200 mb-5">
              <View className="flex-row items-center justify-between mb-5">
                <Text className="text-xl font-extrabold text-slate-900 tracking-tight">Masuk ke Kasir</Text>
                <View className="bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200">
                  <Text className="text-slate-500 text-[9px] font-extrabold tracking-wider">VERSI 2.4.1</Text>
                </View>
              </View>

              <View className="flex-col gap-4">
                {/*Input Username*/}
                <View className="flex-col gap-1.5">
                  <View className="flex-row justify-between items-center">
                    <Text className="text-[11px] font-bold text-slate-700">Nomor HP atau ID Kasir</Text>
                    <Text className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Wajib</Text>
                  </View>
                  <View className={`relative flex-row items-center rounded-xl h-14 border transition-colors ${focusedInput === 'username' ? 'border-emerald-500 bg-white shadow-sm' : 'border-slate-200 bg-slate-50'}`}>
                    <View className="absolute left-3.5">
                      <MaterialIcons name="badge" size={22} color={focusedInput === 'username' ? '#059669' : '#94a3b8'} />
                    </View>
                    <TextInput 
                      className="flex-1 h-full bg-transparent pl-12 pr-4 text-[13px] text-slate-900 font-bold"
                      value={username}
                      onChangeText={setUsername}
                      onFocus={() => setFocusedInput('username')}
                      onBlur={() => setFocusedInput(null)}
                      placeholder="0812-3456-7890"
                      placeholderTextColor="#94a3b8"
                    />
                  </View>
                </View>

                {/* Input Password*/}
                <View className="flex-col gap-1.5">
                  <View className="flex-row justify-between items-center">
                    <Text className="text-[11px] font-bold text-slate-700">PIN Akses Toko (6 Digit)</Text>
                    <Text className="text-[9px] font-extrabold text-emerald-600 uppercase tracking-wider">Tersimpan</Text>
                  </View>
                  <View className={`relative flex-row items-center rounded-xl h-14 border transition-colors ${focusedInput === 'pin' ? 'border-emerald-500 bg-white shadow-sm' : 'border-slate-200 bg-slate-50'}`}>
                    <View className="absolute left-3.5">
                      <MaterialIcons name="pin" size={22} color={focusedInput === 'pin' ? '#059669' : '#94a3b8'} />
                    </View>
                    <TextInput 
                      className="flex-1 h-full bg-transparent pl-12 pr-12 text-lg tracking-[0.25em] font-black text-slate-900"
                      secureTextEntry={!showPassword}
                      value={password}
                      onChangeText={setPassword}
                      onFocus={() => setFocusedInput('pin')}
                      onBlur={() => setFocusedInput(null)}
                      placeholder="••••••"
                      keyboardType="number-pad"
                      placeholderTextColor="#94a3b8"
                    />
                    <TouchableOpacity 
                      className="absolute right-2 w-10 h-10 items-center justify-center active:opacity-60"
                      onPress={() => setShowPassword(!showPassword)}
                    >
                      <MaterialIcons name={showPassword ? "visibility" : "visibility-off"} size={20} color="#94a3b8" />
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Remember Me & Forgot PIN */}
                <View className="flex-row justify-between items-center mt-1 px-1">
                  <TouchableOpacity 
                    className="flex-row items-center gap-2 active:opacity-70"
                    onPress={() => setRememberMe(!rememberMe)}
                  >
                    <View className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${rememberMe ? 'bg-emerald-600 border-emerald-600' : 'bg-transparent border-slate-300'}`}>
                      {rememberMe && <MaterialIcons name="check" size={14} color="white" />}
                    </View>
                    <Text className="text-[11px] font-bold text-slate-600">Ingat Toko Ini</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="active:opacity-70">
                    <Text className="text-[11px] font-extrabold text-emerald-600">Lupa PIN Kasir?</Text>
                  </TouchableOpacity>
                </View>

                {/* Login Button*/}
                <TouchableOpacity 
                  onPress={handleLogin}
                  disabled={isLoading}
                  className={`w-full h-14 rounded-xl flex-row items-center justify-center gap-2 shadow-sm mt-3 ${isLoading ? 'bg-emerald-700' : 'bg-emerald-600 active:bg-emerald-700'}`}
                >
                  {isLoading ? (
                    <ActivityIndicator color="white" size="small" />
                  ) : (
                    <>
                      <Text className="text-white font-extrabold text-[15px] tracking-wide">Masuk ke Toko</Text>
                      <MaterialIcons name="arrow-forward" size={20} color="white" />
                    </>
                  )}
                </TouchableOpacity>
              </View>

              {/* Quick Profile Divider */}
              <View className="flex-row items-center mt-6 mb-4">
                <View className="flex-1 h-[1px] bg-slate-100" />
                <Text className="mx-3 text-[9px] font-extrabold text-slate-400 uppercase tracking-widest">Ganti Kasir Cepat</Text>
                <View className="flex-1 h-[1px] bg-slate-100" />
              </View>

              {/* Quick Profile Grid */}
              <View className="flex-row gap-3">
                <TouchableOpacity 
                  onPress={() => setQuickProfile('cashier.budi', '123456')}
                  className="flex-1 flex-row items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100 active:bg-slate-100"
                >
                  <View className="w-9 h-9 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center shadow-sm">
                    <Text className="text-emerald-800 font-black text-xs">B</Text>
                  </View>
                  <View className="flex-1">
                    <Text className="text-[11px] font-bold text-slate-900" numberOfLines={1}>Kasir Budi</Text>
                    <Text className="text-[9px] font-semibold text-slate-500 mt-0.5">Shift Pagi</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity 
                  onPress={() => setQuickProfile('owner.haryanto', '882104')}
                  className="flex-1 flex-row items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100 active:bg-slate-100"
                >
                  <View className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center shadow-sm border border-slate-700">
                    <Text className="text-white font-black text-xs">H</Text>
                  </View>
                  <View className="flex-1">
                    <Text className="text-[11px] font-bold text-slate-900" numberOfLines={1}>Bu Haryanto</Text>
                    <Text className="text-[9px] font-semibold text-slate-500 mt-0.5">Pemilik</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            {/* FOOTER ACTIONS & INFO */}
            <View className="flex-col gap-4 mb-8">
              <TouchableOpacity 
                onPress={handleLogin}
                className="w-full p-4 rounded-2xl bg-white flex-row items-center justify-between border border-slate-200 active:bg-slate-50 shadow-sm"
              >
                <View className="flex-row items-center gap-3">
                  <View className="w-10 h-10 rounded-xl bg-slate-100 items-center justify-center border border-slate-200">
                    <MaterialIcons name="point-of-sale" size={20} color="#0f172a" />
                  </View>
                  <View>
                    <Text className="text-[13px] font-bold text-slate-900">Akses Dashboard Warung</Text>
                    <Text className="text-[10px] font-medium text-slate-500 mt-0.5">Buka tanpa login untuk mode audit</Text>
                  </View>
                </View>
                <MaterialIcons name="chevron-right" size={22} color="#94a3b8" />
              </TouchableOpacity>

              <View className="items-center justify-center py-2 opacity-80">
                <View className="flex-row items-center gap-1 mb-1">
                  <MaterialIcons name="verified-user" size={14} color="#059669" />
                  <Text className="text-[10px] font-bold text-slate-700">Offline-First Engine Siap Sinkron</Text>
                </View>
                <Text className="text-[9px] font-medium text-slate-400 text-center tracking-wide">
                  Terdaftar & Aman untuk Pedagang Mikro Indonesia
                </Text>
              </View>
            </View>
            
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}