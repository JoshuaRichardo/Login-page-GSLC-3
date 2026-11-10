# Mini Payroll UMKM - GSLC 3

Aplikasi untuk Sistem Manajemen Kasir dan Inventaris dasar untuk UMKM. Aplikasi ini dibuat dengan React Native (Expo) dan NativeWind (Tailwind CSS).

## 1. Analisis Kebutuhan (LO 3)

**Masalah:** 
Pemilik bisnis seperti toko pojok atau minimarket yang mencatat arus kas dan stok barang pada sebuah buku catatan? Akibatnya, menjadi sulit bagi mereka untuk melacak berapa banyak persediaan yang tersisa secara real-time, dan prosesnya sering berujung pada kehabisan stok tanpa mereka sadari sepenuhnya.

**Target Pengguna:** 
Pemilik usaha UMKM dan kasir.

**5 Kebutuhan Pengguna (User Needs):**
1. Mereka perlu adanya indikasi visual yang menunjukkan pemasukan dan pengeluaran kas saat ini untuk hari ini
2. Diperlukan agar pengguna dapat menemukan status stok saat ini dari suatu item di gudang: Aman, Rendah, atau Habis.
3. Karena jumlah item bisa sangat banyak, pengguna memerlukan fitur pencarian yang mudah agar dapat menemukan item tertentu tanpa harus terus mencari tanpa akhir melalui daftar panjang.
4. Pengguna harus dapat melihat detail pada setiap item (harga jual, kode SKU, dll) sebelum melakukan pengisian ulang (restocking).
5. Transparan: Pengguna harus dapat melihat riwayat transaksi (masuk dan keluar).

**Tabel Pemetaan Kebutuhan ke Layar & Komponen UI:**

| Kebutuhan Pengguna | Nama Layar (Screen) | Komponen UI yang Digunakan |
|---|---|---|
| Ringkasan kas / keuangan | `DashboardScreen` | Card Saldo (Teks angka besar & kotak +/-) |
| Pantau status stok | `DashboardScreen` | `InventoryRow` (Reusable Component) |
| Pencarian barang | `DashboardScreen` | `TextInput` (Search Bar) dengan fitur Filter |
| Detail info barang | `DetailScreen` | Icon Card & Text (Harga, SKU, Stok) |
| Riwayat transaksi | `TransactionScreen`| List Transaksi (Mapping Array Object) |

**Alasan Keputusan Desain & Rencana Pengembangan:**
Semua desain dipilih dengan sengaja untuk memanfaatkan desain flat, dengan warna dasar putih/abu-abu serta aksen hijau agar terlihat bersih dan profesional. Desain menggunakan model satu kolom, karena hampir semua pengguna UKM sudah terbiasa dengan paradigma scroll halaman vertikal yang digunakan oleh aplikasi e-commerce. Namun, ke depannya, aplikasi ini perlu dihubungkan ke database backend yang nyata (Firebase/PostgreSQL dan sejenisnya).

## 2. Penjelasan Konsep React Native (LO 1)

**Cara Kerja React Native:**
React Native adalah *framework* yang memungkinkan *developer* membangun aplikasi *mobile* menggunakan bahasa JavaScript atau TypeScript beserta konsep React. Berbeda dengan aplikasi *hybrid* lama yang sekadar
menampilkan *website* di dalam aplikasi (WebView), React Native bekerja dengan menggunakan sistem "Bridge" (jembatan). Kode JavaScript yang kita tulis akan berkomunikasi dengan *thread* bawaan sistem operasi melalui 
*bridge* ini, lalu memerintahkan OS untuk merender komponen UI *native* asli (seperti `android.view.View` di Android atau `UIView` di iOS). Itulah sebabnya aplikasi React Native terasa sangat mulus seperti aplikasi asli.

**3 Keunggulan Utama untuk Aplikasi Hybrid:**
1. **Cross-Platform Asli:** Satu *codebase* (satu kali *coding*) bisa langsung di-*build* menjadi aplikasi Android (.apk/.aab) dan iOS (.ipa), sehingga menghemat waktu dan biaya pengembangan.
2. **Performa Mendekati Native:** Karena menggunakan elemen UI *native* dari sistem operasi (bukan peramban web), performa animasinya jauh lebih cepat dan ringan dibanding *framework hybrid* berbasis HTML/CSS.
3. **Fast Refresh / Hot Reloading:** *Developer* bisa langsung melihat perubahan desain atau logika di layar *emulator* atau HP fisik hanya dalam hitungan detik setelah menyimpan file (*save*), tanpa perlu melakukan
   proses *compile* atau *rebuild* ulang dari awal.

**Konsep Utama (Komponen, Props, State, Navigasi) & Contoh Kode:**
Aplikasi ini dibangun berdasarkan 4 pilar utama React Native:
- **Komponen (Component):** Blok pembangun UI. Aplikasi dibagi menjadi potongan-potongan kecil yang bisa dipanggil, seperti `DashboardScreen` atau tombol.
- **Props (Properties):** Cara kita mengirim data dari komponen induk (*parent*) ke komponen anak (*child*), mirip seperti melempar parameter ke dalam sebuah fungsi.
- **State:** Tempat menyimpan data yang bisa berubah-ubah seiring interaksi pengguna. Jika State berubah, layar akan otomatis me-render ulang (*re-render*) komponen tersebut.
- **Navigasi:** Perpindahan antar halaman. Di project ini saya menggunakan React Navigation (`NativeStackNavigation`).

Berikut adalah contoh implementasi gabungan keempat konsep tersebut dalam aplikasi ini:

```tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TombolNavigasi = ({ title }) => {
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity onPress="{()"> navigation.navigate('Transaction')} style={{ padding: 10 }}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default function ContohKonsep() {
  const [klik, setKlik] = useState(0); 

  return (
    <View 'center' 1, alignItems: flex: style="{{" }}>
      <Text>Tombol telah ditekan: {klik} kali</Text>
      
      <TouchableOpacity onPress="{()"> setKlik(klik + 1)}>
        <Text>Tambah Angka (Ubah State)</Text>
      </TouchableOpacity>

      <TombolNavigasi title="Pergi ke Halaman Transaksi"/>
    </View>
  );
}
