// FILE SYSTEM
// File System merupakan standard library yang bisa digunakan untuk memanipulasi file system
// Dalam File System terdapat 3 Jenis Library
/*
1. Library yang bersifat blocking atau synchronous
2. Library yang bersifat non-blocking atau asynchronous menggunakan callback
3. Library yang bersifat non-blocking atau asynchronous menggunakan promise (SANGAT DISARANKAN MENGGUNAKAN INI)
*/
// https://nodejs.org/dist/latest-v16.x/docs/api/fs.html

// Ini penerepan salah satu library menggunakan "Promise"

import fs from "fs/promises";

const buffer = await fs.readFile("file-system.mjs"); // Membaca file
console.log(buffer.toString()); // Mengubah informasi ke string

await fs.writeFile("temp.txt", "Hello NodeJS"); // Menulis File
