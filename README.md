# Exchange App 💱

Aplikasi konversi mata uang (currency exchange) yang dibangun dengan React dan Vite. Aplikasi ini memungkinkan pengguna untuk mengecek nilai tukar mata uang secara real-time dan melakukan konversi antar mata uang.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://exchange-app-by-ajiprasetia.vercel.app)
[![React](https://img.shields.io/badge/React-18+-61dafb?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5+-646cff?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3+-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)

## 🚀 Demo

Coba aplikasi live di: [exchange-app-by-ajiprasetia.vercel.app](https://exchange-app-by-ajiprasetia.vercel.app)

## ✨ Fitur

- 💱 **Real-time Exchange Rates**: Nilai tukar mata uang yang selalu update
- 🔄 **Multi-Currency Support**: Mendukung berbagai mata uang internasional
- 📊 **Easy Conversion**: Interface yang mudah digunakan untuk konversi mata uang
- 📱 **Responsive Design**: Tampilan optimal di semua perangkat
- ⚡ **Fast Performance**: Loading cepat dengan Vite

## 🛠️ Tech Stack

- **Frontend Framework**: [React 18+](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Code Quality**: ESLint
- **Deployment**: [Vercel](https://vercel.com/)
- **API**: Exchange Rate API (atau API lain untuk data nilai tukar)

## 📋 Prerequisites

Sebelum memulai, pastikan Anda sudah menginstall:

- [Node.js](https://nodejs.org/) (versi 16 atau lebih tinggi)
- npm atau yarn
- API Key untuk exchange rate service (jika diperlukan)

## 🔧 Instalasi

1. Clone repository ini

```bash
git clone https://github.com/ajiprasetia/exchange-app.git
```

2. Masuk ke direktori project

```bash
cd exchange-app
```

3. Install dependencies

```bash
npm install
```

atau jika menggunakan yarn:

```bash
yarn install
```

4. Setup environment variables (jika diperlukan)

Buat file `.env` di root directory:

```env
VITE_EXCHANGE_API_KEY=your_api_key_here
VITE_API_BASE_URL=your_api_url_here
```

## 🚀 Menjalankan Project

### Development Mode

Untuk menjalankan project dalam mode development:

```bash
npm run dev
```

atau:

```bash
yarn dev
```

Aplikasi akan berjalan di `http://localhost:5173` (atau port lain jika 5173 sudah digunakan).

### Build untuk Production

Untuk membuat build production:

```bash
npm run build
```

atau:

```bash
yarn build
```

File hasil build akan tersimpan di folder `dist/`.

### Preview Build

Untuk melihat preview dari build production:

```bash
npm run preview
```

atau:

```bash
yarn preview
```


## 🎯 Cara Menggunakan

1. **Pilih Mata Uang Asal**: Pilih mata uang yang ingin Anda konversi
2. **Masukkan Jumlah**: Input jumlah uang yang ingin dikonversi
3. **Pilih Mata Uang Tujuan**: Pilih mata uang hasil konversi
4. **Lihat Hasil**: Aplikasi akan menampilkan hasil konversi secara otomatis

## 🔌 API Integration

Aplikasi ini menggunakan API untuk mendapatkan data nilai tukar mata uang. Beberapa API yang bisa digunakan:

- [ExchangeRate-API](https://www.exchangerate-api.com/)
- [Fixer.io](https://fixer.io/)
- [Open Exchange Rates](https://openexchangerates.org/)
- [CurrencyAPI](https://currencyapi.com/)

## 📦 Scripts yang Tersedia

| Script | Deskripsi |
|--------|-----------|
| `npm run dev` | Menjalankan development server |
| `npm run build` | Membuat production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Menjalankan ESLint untuk check code quality |

## 🎨 Customization

### Menambah Mata Uang Baru

Edit file konfigurasi mata uang di `src/utils/currencies.js` (atau sesuaikan):

```javascript
export const currencies = [
  { code: 'USD', name: 'US Dollar', symbol: '$' },
  { code: 'EUR', name: 'Euro', symbol: '€' },
  { code: 'IDR', name: 'Indonesian Rupiah', symbol: 'Rp' },
  // Tambahkan mata uang lainnya
];
```

### Mengubah Styling

- Konfigurasi Tailwind CSS dapat diubah di `tailwind.config.js`
- Custom CSS dapat ditambahkan sesuai kebutuhan


## 📝 License

Project ini bersifat open source dan tersedia untuk digunakan oleh siapa saja.

## 👤 Author

**Aji Prasetia**

- Website: [ajiprasetia.vercel.app](https://ajiprasetia.vercel.app)
- GitHub: [@ajiprasetia](https://github.com/ajiprasetia)
- Exchange App: [exchange-app-by-ajiprasetia.vercel.app](https://exchange-app-by-ajiprasetia.vercel.app)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - JavaScript library untuk building UI
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vercel](https://vercel.com/) - Platform untuk deployment
- Exchange Rate API providers - Data nilai tukar mata uang

⭐ Jika project ini berguna, jangan lupa beri star!

💡 Ada saran atau menemukan bug? Silakan buat issue!
