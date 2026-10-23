# TaskFlow Website
Aplikasi manajemen tugas mahasiswa berbasis website dengan backend Node.js + Express. Data disimpan dalam Array of Objects (tanpa database).

## Cara menjalankan
1. Instal Node.js versi 18 atau lebih baru.
2. Buka terminal di folder project.
3. Jalankan `npm install`.
4. Jalankan `npm start`.
5. Buka `http://localhost:3000` di browser.

## Fitur
- CRUD tugas: tambah, lihat, edit, ubah status, hapus.
- Pencarian dan filter berdasarkan status.
- Pengurutan deadline, prioritas, atau nama.
- Statistik jumlah tugas dan completion rate.
- Validasi input dan penanganan ID tidak ditemukan.

## Struktur folder
- `app.js`: server Express dan endpoint API.
- `src/data.js`: data Array of Objects.
- `src/tasks.js`: fungsi CRUD dan statistik.
- `public/index.html`: struktur website.
- `public/style.css`: tampilan responsif.
- `public/app.js`: interaksi frontend dengan API.

## Struktur object
Setiap tugas memiliki `id`, `title`, `course`, `deadline`, `status`, dan `priority`.

## Array methods dan sintaks ES6
Project menggunakan arrow functions, `const`/`let`, `map`, `filter`, `find`, `some`, `sort`, spread operator, destructuring, dan template literals.

## Catatan
Data hanya tersimpan selama server berjalan. Saat server dimulai ulang, data kembali ke data awal. Repository GitHub perlu dibuat dan di-push secara terpisah.
