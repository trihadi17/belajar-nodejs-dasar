// BUFFER
// Buffer merupakan object yang berisikan urutan byte dengan panjang tetap
// Buffer merupakan turunan dari tipe data Uint8Array
// Buffer ini bersifat global, artinya tidak perlu melakukan import
// https://nodejs.org/dist/latest-v16.x/docs/api/buffer.html
// NOTED : merupakan array yang isinya byte byte dari tiap karakter yang kita masukkan

const buff = Buffer.from("Trihadi Putra");
console.log(buff); // 84, 114, 105, 104, 97, 100, 105, 32, 80, 117, 116, 114, 97
console.log(buff.toString()); // Trihadi Putra

// Membalikkan urutan byte dan karakter
buff.reverse();
console.log(buff); // 97, 114, 116, 117, 80, 32, 105, 100, 97, 104, 105, 114, 84
console.log(buff.toString()); // artuP idahirT
