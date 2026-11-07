/** @type {import('tailwindcss').Config} */
module.exports = {
  // Pastikan folder app sudah masuk di sini
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  
  // INI BARIS YANG WAJIB DITAMBAHKAN
  presets: [require("nativewind/preset")],
  
  theme: {
    extend: {},
  },
  plugins: [],
}