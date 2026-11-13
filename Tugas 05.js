// Perulangan angka 1 sampai 10
console.log("Deret Angka 1 sampai 10:");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Perulangan hitung mundur 5 sampai 1
console.log("Hitung Mundur:");

for (let i = 5; i >= 1; i--) {
    console.log(i);
}

// Teks setelah perulangan selesai
console.log("Mulai!");

// Membuat variabel
let angka = 1;
let total = 0;

// Perulangan while
while (angka <= 5) {
    total = total + angka;

    console.log("Angka:", angka);
    console.log("Total sementara:", total);

    angka++;
}

// Menampilkan hasil akhir
console.log("Hasil akhir total:", total);