import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type RegisterScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Register'>;

interface Props {
  navigation: RegisterScreenNavigationProp;
}

export default function RegisterScreen({ navigation }: Props) {
  const [phone, setPhone] = useState<string>('');
  const [storeName, setStoreName] = useState<string>('');
  const [pin, setPin] = useState<string>('');
  const [showPin, setShowPin] = useState<boolean>(false);

  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const isFormValid = phone.length > 8 && storeName.trim().length > 0 && pin.length === 6;

  const handleRegister = () => {
    if (!isFormValid) return;
    Keyboard.dismiss();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigation.replace('Dashboard');
    }, 1200);
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-50" edges={['top', 'bottom']}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8fafc" />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView className="flex-1 px-5 pt-4" showsVerticalScrollIndicator={false}>
            
            <View className="flex-row items-center justify-between mb-8">
              <TouchableOpacity
                className="w-10 h-10 rounded-full bg-white items-center justify-center border border-slate-200 shadow-sm active:bg-slate-100"
                onPress={() => navigation.goBack()}
              >
                <MaterialIcons name="arrow-back" size={20} color="#0f172a" />
              </TouchableOpacity>
              <TouchableOpacity
                className="bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100"
                onPress={() => navigation.navigate('Login')}
              >
                <Text className="text-emerald-700 font-extrabold text-[11px] tracking-wide">Masuk ke Kasir</Text>
              </TouchableOpacity>
            </View>

            <View className="mb-8">
              <View className="w-16 h-16 rounded-2xl bg-emerald-600 flex items-center justify-center shadow-md mb-4 -rotate-3">
                <MaterialIcons name="storefront" size={36} color="white" />
              </View>
              <Text className="font-extrabold text-3xl text-slate-900 tracking-tight mb-2">Buka Tokomu</Text>
              <Text className="text-slate-500 text-[13px] leading-relaxed pr-5">
                Hanya butuh 3 info dasar untuk mulai mencatat kasir dan kelola stok pertamamu.
              </Text>
            </View>

            <View className="flex-col gap-5">

              <View className="flex-col gap-1.5">
                <Text className="text-[11px] font-bold text-slate-700 ml-1">Nomor HP (WhatsApp)</Text>
                <View className={`flex-row items-center rounded-2xl h-14 border bg-white transition-colors ${focusedInput === 'phone' ? 'border-emerald-500 shadow-sm' : 'border-slate-200'}`}>
                  <View className="px-4">
                    <MaterialIcons name="phone" size={20} color={focusedInput === 'phone' ? '#059669' : '#94a3b8'} />
                  </View>
                  <TextInput
                    className="flex-1 h-full bg-transparent pr-4 text-[14px] text-slate-900 font-bold tracking-wide"
                    value={phone} onChangeText={setPhone} keyboardType="phone-pad"
                    onFocus={() => setFocusedInput('phone')} onBlur={() => setFocusedInput(null)}
                    placeholder="Contoh: 081234567890" placeholderTextColor="#cbd5e1"
                  />
                </View>
              </View>

              <View className="flex-col gap-1.5">
                <Text className="text-[11px] font-bold text-slate-700 ml-1">Nama Toko / Warung</Text>
                <View className={`flex-row items-center rounded-2xl h-14 border bg-white transition-colors ${focusedInput === 'store' ? 'border-emerald-500 shadow-sm' : 'border-slate-200'}`}>
                  <View className="px-4">
                    <MaterialIcons name="store" size={20} color={focusedInput === 'store' ? '#059669' : '#94a3b8'} />
                  </View>
                  <TextInput
                    className="flex-1 h-full bg-transparent pr-4 text-[14px] text-slate-900 font-bold"
                    value={storeName} onChangeText={setStoreName}
                    onFocus={() => setFocusedInput('store')} onBlur={() => setFocusedInput(null)}
                    placeholder="Contoh: Warung Makmur" placeholderTextColor="#cbd5e1"
                  />
                </View>
              </View>

              <View className="flex-col gap-1.5">
                <View className="flex-row justify-between items-center ml-1 pr-2">
                  <Text className="text-[11px] font-bold text-slate-700">Buat PIN Akses (6 Angka)</Text>
                  <Text className="text-[9px] font-extrabold text-slate-400">RAHASIA</Text>
                </View>
                <View className={`relative flex-row items-center rounded-2xl h-14 border bg-white transition-colors ${focusedInput === 'pin' ? 'border-emerald-500 shadow-sm' : 'border-slate-200'}`}>
                  <View className="px-4">
                    <MaterialIcons name="lock" size={20} color={focusedInput === 'pin' ? '#059669' : '#94a3b8'} />
                  </View>
                  <TextInput
                    className="flex-1 h-full bg-transparent pr-12 text-lg tracking-[0.3em] font-black text-slate-900"
                    secureTextEntry={!showPin} value={pin} onChangeText={setPin} keyboardType="number-pad" maxLength={6}
                    onFocus={() => setFocusedInput('pin')} onBlur={() => setFocusedInput(null)}
                    placeholder="••••••" placeholderTextColor="#cbd5e1"
                  />
                  <TouchableOpacity className="absolute right-4" onPress={() => setShowPin(!showPin)}>
                    <MaterialIcons name={showPin ? "visibility" : "visibility-off"} size={22} color="#94a3b8" />
                  </TouchableOpacity>
                </View>
              </View>

            </View>

            <View className="mt-8 mb-10">
              <TouchableOpacity
                onPress={handleRegister}
                disabled={isLoading || !isFormValid}
                className={`w-full h-14 rounded-2xl flex-row items-center justify-center gap-2 transition-colors ${isLoading || !isFormValid ? 'bg-slate-200' : 'bg-emerald-600 shadow-md active:bg-emerald-700'}`}
              >
                {isLoading ? (
                  <ActivityIndicator color="white" size="small" />
                ) : (
                  <>
                    <Text className={`font-extrabold text-[15px] tracking-wide ${isLoading || !isFormValid ? 'text-slate-400' : 'text-white'}`}>
                      Daftar Sekarang
                    </Text>
                    <MaterialIcons name="check-circle" size={20} color={isLoading || !isFormValid ? '#94a3b8' : 'white'} />
                  </>
                )}
              </TouchableOpacity>
              
              <Text className="text-[11px] text-slate-400 text-center mt-5 px-6 leading-relaxed">
                Dengan mendaftar, kamu menyetujui <Text className="font-bold text-slate-600">Syarat & Ketentuan</Text> aplikasi ini.
              </Text>
            </View>

          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}