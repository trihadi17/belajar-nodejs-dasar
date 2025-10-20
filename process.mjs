// PROCESS
// Process merupakan standard library yang digunakan untuk mendapatkan informasi proses NodeJS yang sedang berjalan
// Process juga merupakan instance dari EventEmitter, sehingga kita bisa menambahkan listener kedalam "Process"
// https://nodejs.org/dist/latest-v16.x/docs/api/process.html
// NOTED : Sebenarnya Process ini bisa diakses secara global, namun sangat direkomendasikan untuk import

import process from "process";

// Listener ini akan muncul setelah semua proses dijalankan, dan dia bersifat Non Blocking (Async)
process.addListener("exit", function (exitCode) {
  console.log(`NodeJS exit with code ${exitCode}`);
}); // Terakhir muncul

console.log(process.version); // versi -> v20.11.0
console.table(process.argv);
console.table(process.report);
console.table(process.env);

process.exit(1); // Ini muncul terakhir, ini untuk mengakhiri proses

console.log("Hello"); // Ini tidak akan muncul karna proses sudah exit/diberhnetikan
