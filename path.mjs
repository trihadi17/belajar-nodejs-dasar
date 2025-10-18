// PATH
// Path merupakan standard libary yang bisa kita gunakan untuk bekerja dengan lokasi file dan directory/folder

import path from "path";

const file = "/Users/hadi/contoh.txt";

console.log(path.dirname(file)); // directory mana -> /Users/hadi
console.log(path.basename(file)); // nama file -> contoh.txt
console.log(path.extname(file)); // jenis file -> .txt

// NOTED : PATH Tidak digunakan untuk memanipulasi file, untuk memanipulasi isi file menggunakan standard library "File System"
