// READLINE
// Readline merupakan standard library yang digunakan untuk membaca input
// Readline mendukung versi "Callback" dan Juga "Promise"
// https://nodejs.org/dist/latest-v16.x/docs/api/readline.html

// Contoh Readline Menggunakan Promise
import readline from "readline/promises";
import process from "process";

const rl = readline.createInterface({
  input: process.stdin, // Ini menerima input
  output: process.stdout, // mengeluarkan hasil
});

const name = await rl.question("Siapa nama anda? "); // Pertanyaan
console.log(`Halo ${name}`); // Mengeluarkan nilai
rl.close(); // Mengakhiri proses
