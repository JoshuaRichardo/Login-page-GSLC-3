export const INVENTORY_DATA = [
  { 
    id: '1', 
    icon: 'rice-bowl', 
    title: 'Beras Rojolele 5kg', 
    desc: 'Sisa 42 Karung', 
    status: 'AMAN', 
    isCritical: false, 
    price: 'Rp 75.000', 
    sku: 'BRS-RJL-005', 
    lastUpdate: '12 Okt 2026' 
  },
  { 
    id: '2', 
    icon: 'water-drop', 
    title: 'Minyak Goreng Kita 2L', 
    desc: 'Sisa 5 Pouch', 
    status: 'MENIPIS', 
    isCritical: true, 
    price: 'Rp 32.000', 
    sku: 'MGK-2L-001', 
    lastUpdate: '08 Okt 2026' 
  },
  { 
    id: '3', 
    icon: 'shopping-bag', 
    title: 'Tepung Segitiga Biru', 
    desc: 'Stok Habis (0 Dus)', 
    status: 'HABIS', 
    isCritical: true, 
    price: 'Rp 12.500', 
    sku: 'TPG-SGB-001', 
    lastUpdate: '20 Sep 2026' 
  },
] as const;