// DEBUGGGER
// Debugger adalah kita bisa mengikuti tahapan eksekusi program di NodeJS
// Hal ini sangat cocok ketika melakukan proses debugging, mencari sebab masalah yang terjadi di aplikasi kita
// https://nodejs.org/dist/latest-v16.x/docs/api/debugger.html

// BREAKPOINT
// Breakpoint yaitu lokasi dimana kita ingin menghentikan sementara eksekusi kode program
// Biasanya ini dilakukan untuk mengawasai data-data disekitar lokasi berhentinya
// Untuk menambahkan breakpoint, gunakan kata kunci "debugger"

// Menjalankan Mode Debug
// Jika kitam menjalankan file JavaScript hanya dengan menggunakan perintah "node namefile.js", maka secara default dia tidak akan jalan dalam mode debug
// Agar jalan dalam mode debug, kita harus menambahkan perintah "inspect" : "node inspect namafile.js"

// Perintah Debugger
// cont, c : Continer Execution
// next, n : Step next
// step, s : Step in
// out, o : Step Out
// pause : Pause running code

function sayHello(name) {
  debugger; // ini breakpoint
  return `Hello ${name}`;
}

const name = "Hadi";
console.log(sayHello(name));

// Cara debug
// Debug dengan buka terminal dan ketik "node namafile.js"
