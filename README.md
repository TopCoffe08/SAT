# 🏷️ Shopee Affiliate Tools

Website tools lengkap untuk affiliate Shopee: generator link, kalkulator komisi, pencari produk AI, dan dashboard tracking.

## ✨ Fitur

- 🔗 **Generator Link Afiliasi** — Konversi URL Shopee biasa ke link afiliasi
- 🧮 **Kalkulator Komisi** — Estimasi komisi berdasarkan kategori & harga
- 🤖 **Pencari Produk AI** — Rekomendasi produk terlaris berbasis AI (Claude)
- 📊 **Dashboard Tracking** — Catat dan pantau penjualan & komisi

## 🚀 Deploy ke Vercel (Gratis)

### Langkah 1 — Upload ke GitHub

1. Buka [github.com](https://github.com) → klik **New repository**
2. Nama repo: `shopee-affiliate-tools`, pilih **Public** → **Create**
3. Upload semua file dari folder ini (drag & drop ke halaman repo)
4. Klik **Commit changes**

Struktur file yang diupload:
```
shopee-affiliate-tools/
├── index.html
├── vercel.json
├── package.json
├── README.md
└── api/
    └── find-products.js
```

### Langkah 2 — Deploy ke Vercel

1. Buka [vercel.com](https://vercel.com) → daftar/login dengan akun GitHub
2. Klik **Add New → Project**
3. Pilih repo `shopee-affiliate-tools` → klik **Import**
4. Klik **Deploy** (biarkan pengaturan default)

### Langkah 3 — Set API Key (PENTING)

Setelah deploy selesai:

1. Di dashboard Vercel, buka project Anda → tab **Settings**
2. Klik **Environment Variables** di sidebar kiri
3. Tambahkan variabel baru:
   - **Name:** `ANTHROPIC_API_KEY`
   - **Value:** `sk-ant-xxxxxxx...` (API key dari Anthropic)
4. Klik **Save**
5. Pergi ke tab **Deployments** → klik **Redeploy** agar API key aktif

> 💡 Dapatkan API key gratis di [console.anthropic.com](https://console.anthropic.com)

### Langkah 4 — Selesai! 🎉

Website Anda aktif di:
```
https://shopee-affiliate-tools.vercel.app
```

---

## 🔒 Keamanan

- API key **tidak pernah** terekspos ke browser/pengguna
- Semua request AI diproses di server Vercel melalui `/api/find-products`
- Data penjualan disimpan di `localStorage` browser pengguna

## 📦 Teknologi

- **Frontend:** HTML, CSS, JavaScript (Vanilla)
- **Backend:** Vercel Serverless Functions (Node.js)
- **AI:** Anthropic Claude API
- **Chart:** Chart.js

## 💰 Biaya

| Layanan | Biaya |
|---|---|
| Vercel Hosting | **Gratis** |
| GitHub | **Gratis** |
| Anthropic API | ~$0.003 per pencarian |

---

Dibuat dengan ❤️ | Shopee Affiliate Tools © 2025
