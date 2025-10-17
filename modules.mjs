// Modules
// Standard Library yang terdapat di NodeJs bisa kita gunakan seperti layaknya JavaScript Modules
// Karena NodeJS menggunakan Modules, jika kita ingin menggunakan Modules, kita juga perlu memberi tahu bahwa file JavaScript kita menggunakan Modules, caranya dengan mengubah nama file dari .js menjadi .mjs

import os from "os";

console.info(os.platform());
console.table(os.cpus());
