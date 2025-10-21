// BUFFER ENCODING
// Buffer juga bisa digunakan untuk melakukan encoding dari satu endoding ke encoding yang lain
// Ada banyak encoding yang didukung oleh Buffer, misal utf8, ascii, hex, base64, base64url dll

const buffer = Buffer.from("Trihadi Putra", "utf8"); // format awalnya utf8 -> "Trihadi Putra"

console.log(buffer.toString("hex")); // mengubah ke bentuk hexadecimal -> 54726968616469205075747261
console.log(buffer.toString("base64")); // VHJpaGFkaSBQdXRyYQ==

const bufferbase64 = Buffer.from("VHJpaGFkaSBQdXRyYQ==", "base64");
console.log(bufferbase64.toString("utf8")); // Trihadi Putra
