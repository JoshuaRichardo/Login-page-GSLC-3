import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function QRScannerScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.cameraPlaceholder} />

      <View style={styles.overlay}>
        <View style={styles.topOverlay}>
          <Text style={styles.instructions}>Arahkan kamera ke QR Code barang</Text>
        </View>
        
        <View style={styles.middleRow}>
          <View style={styles.sideOverlay} />
          
          <View style={styles.scannerFrame}>
            <View style={[styles.corner, styles.topLeft]} />
            <View style={[styles.corner, styles.topRight]} />
            <View style={[styles.corner, styles.bottomLeft]} />
            <View style={[styles.corner, styles.bottomRight]} />
          </View>
          
          <View style={styles.sideOverlay} />
        </View>

        <View style={styles.bottomOverlay}>
          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}>
              <Ionicons name="close" size={28} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.mainButton}>
              <Ionicons name="images-outline" size={24} color="#fff" style={{ marginRight: 8 }} />
              <Text style={styles.mainButtonText}>Upload dari Galeri</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="flash-outline" size={28} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const overlayColor = 'rgba(0,0,0,0.65)';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  cameraPlaceholder: { ...StyleSheet.absoluteFill, backgroundColor: '#1e293b' },
  overlay: { flex: 1 },
  topOverlay: { flex: 1, backgroundColor: overlayColor, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 40 },
  instructions: { color: '#fff', fontSize: 16, fontWeight: '500', textAlign: 'center' },
  middleRow: { flexDirection: 'row', height: 250 },
  sideOverlay: { flex: 1, backgroundColor: overlayColor },
  scannerFrame: {
    width: 250, height: 250, backgroundColor: 'transparent',
    justifyContent: 'space-between', alignItems: 'center'
  },

  corner: { position: 'absolute', width: 40, height: 40, borderColor: '#38bdf8', borderWidth: 4 },
  topLeft: { top: 0, left: 0, borderBottomWidth: 0, borderRightWidth: 0, borderTopLeftRadius: 16 },
  topRight: { top: 0, right: 0, borderBottomWidth: 0, borderLeftWidth: 0, borderTopRightRadius: 16 },
  bottomLeft: { bottom: 0, left: 0, borderTopWidth: 0, borderRightWidth: 0, borderBottomLeftRadius: 16 },
  bottomRight: { bottom: 0, right: 0, borderTopWidth: 0, borderLeftWidth: 0, borderBottomRightRadius: 16 },
  bottomOverlay: { flex: 1, backgroundColor: overlayColor, justifyContent: 'flex-end', paddingBottom: 40 },
  actionRow: { flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', paddingHorizontal: 20 },
  iconButton: { width: 56, height: 56, borderRadius: 28, backgroundColor: 'rgba(255,255,255,0.2)', justifyContent: 'center', alignItems: 'center' },
  mainButton: { flexDirection: 'row', backgroundColor: '#0284c7', paddingVertical: 14, paddingHorizontal: 24, borderRadius: 30, alignItems: 'center' },
  mainButtonText: { color: '#fff', fontSize: 15, fontWeight: '600' }
});