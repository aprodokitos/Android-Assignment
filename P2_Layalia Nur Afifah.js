const daftarBuku = [
    {
        judul: "Belajar JavaScript",
        penulis: "John Doe",
        penerbit: "Gramedia",
        genre: "Pendidikan"
    },
    {
        judul: "Petualangan si Kancil",
        penulis: "Budi Santoso",
        penerbit: "Erlangga",
        genre: "Cerita Anak"
    },
    {
        judul: "Kotlin untuk Pemula",
        penulis: "Siti Aminah",
        penerbit: "Gramedia",
        genre: "Teknologi"
    },
    {
        judul: "Pendidikan Karakter",
        penulis: "Rina Yulia",
        penerbit: "Pustaka Cendekia",
        genre: "Sosial"
    },
    {
        judul: "Menguasai Algoritma",
        penulis: "David Smith",
        penerbit: "Oxford University Press",
        genre: "Teknologi"
    },
    {
        judul: "Pulang",
        penulis: "Tere Liye",
        penerbit: "Republika",
        genre: "Aksi"
    }
];

daftarBuku.forEach((buku) => {
    if (buku.penerbit === "Gramedia") {
        console.log(`Judul: ${buku.judul}, Penulis: ${buku.penulis}, Penerbit: ${buku.penerbit}, Genre: ${buku.genre}`);
    }
});


