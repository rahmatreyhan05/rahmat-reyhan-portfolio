# Rahmat Reyhan Portfolio

Portofolio one-page: HTML, CSS, dan Vanilla JavaScript. Tanpa build, tanpa backend. Bisa dibuka langsung lewat `index.html`.

## Yang perlu Anda isi
Semua data ada di `js/script.js`:
- `CONFIG`: email, GitHub, LinkedIn, WhatsApp (opsional), dan `cvAvailable`.
- `PROJECTS`: role, learnings, link `github` dan `demo` (kosongkan jika belum ada; tombol tidak akan ditampilkan).
- `EXPERIENCE`, `EDUCATION`, `CERTS`, `ORG`, `LANGS`: ganti teks `[ ... ]` dengan data asli (issuer, tahun, credential URL, dll).
- `ACHIEVEMENTS`: tambahkan isi saat data tersedia.

## CV
File sudah ada di `assets/documents/CV-Rahmat-Reyhan.pdf`. Untuk menggantinya, timpa file dengan nama yang sama.

## Menambah sertifikat
Di `js/script.js`, bagian `CERTS`, salin satu baris `c(...)` dan isi: `c("Nama","Kategori","Penerbit","2025","https://link-credential")`. Isi tahun dan URL credential sesuai masing-masing sertifikat; jangan gunakan URL yang sama untuk sertifikat berbeda. Setiap sertifikat memiliki kolom URL sendiri. URL opsional dan tombol View Credential muncul otomatis jika link diisi.

Untuk sertifikat PDF, simpan file di `assets/images/certificates/`, lalu isi parameter keenam dengan path file PDF: `c("Nama Sertifikat","Kategori","Penerbit","2025","","assets/images/certificates/nama-sertifikat.pdf")`. Kartu menampilkan pratinjau halaman pertama PDF, dan detail menampilkan seluruh PDF yang dapat di-scroll. Jika parameter PDF diisi, gambar sertifikat tidak digunakan.

## Contact form
Situs statis, jadi form membuka Gmail di browser (tab baru) dengan pesan terisi; pengirim perlu login Gmail. Isi `CONFIG.email` agar berfungsi. Untuk pengiriman langsung, Anda bisa memakai layanan form eksternal seperti Formspree.

## Deploy ke GitHub Pages
1. Buat repository baru di GitHub, mis. `rahmat-reyhan-portfolio`.
2. Upload semua isi folder ini (termasuk `.nojekyll`) ke branch `main`.
3. Buka **Settings > Pages**. Pada **Build and deployment**, pilih **Deploy from a branch**, branch `main`, folder `/ (root)`, lalu Save.
4. Tunggu 1-2 menit. Situs tersedia di `https://USERNAME.github.io/rahmat-reyhan-portfolio/`.

Semua path bersifat relatif sehingga aman untuk project site.

## Struktur
```
index.html  css/style.css  js/script.js  assets/{images,icons,documents}  .nojekyll
```

## Menambah gambar
Letakkan file (format .jpg, .png, atau .webp, nama tanpa spasi) di folder berikut. Gambar yang tidak ada otomatis disembunyikan, jadi isi sebanyak yang Anda punya, mulai dari nomor 1.

| Untuk | Folder | Nama file |
|---|---|---|
| Foto profil | `assets/images/` | `profile.jpg` |
| Screenshot proyek | `assets/images/projects/` | `internship-1/2/3`, `erp-1/2/3` |
| Dokumentasi magang | `assets/images/experience/` | `bogasari-1/2/3` |
| Pencapaian MBKM | `assets/images/achievements/` | `mbkm-1/2/3` |
| Gambar sertifikat | `assets/images/certificates/` | lihat `DAFTAR-NAMA-FILE.txt` |
| Organisasi (kegiatan/sertifikat) | `assets/images/organization/` | `futsal-1/2/3` |

### Gambar section project
1. Simpan screenshot proyek internship di `assets/images/projects/` dengan nama `internship-1.jpg`, `internship-2.jpg`, dan `internship-3.jpg`. Format `.png` atau `.webp` juga didukung.
2. Ketiga gambar pada daftar `shots` tampil di card dan galeri **View Details**; klik gambar untuk memperbesar.
3. Untuk menambah atau mengganti gambar, edit `shots` pada proyek di `PROJECTS` dalam `js/script.js`. Tulis path tanpa ekstensi, misalnya `IMG+"projects/internship-4"`, lalu simpan file bernama `internship-4.jpg` di folder tersebut.

Selama foto belum ada, kartu menampilkan kotak putus-putus "Tambah foto" berisi nama file yang dibutuhkan. Setelah semua foto terpasang, ubah `showPlaceholders: false` di `CONFIG` (`js/script.js`) agar kotak yang masih kosong tidak tampil di situs publik.
