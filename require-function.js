// Awal ketika NodeJs rilis, fitur JavaScript Modules belum rilis, namun sekarang JavaScript banyak menggunakan JavaScript Modules
// NodeJS pun awalnya tidak menggunakan JavaScript Modules, namun sekarang NodeJs sudah bisa menggunakan JavaScript Modules, dan sangat direkomendiasikan menggunakannya
// Namun awal sebelum Modules, NodeJs menggunakan funciton require() untuk melakukan import file

const os = require("os");
console.info(os.platform());
console.table(os.cpus());
