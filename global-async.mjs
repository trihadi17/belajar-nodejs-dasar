// GLOBAL ASYNC
// Saat belajar JavaScript, untuk menggunakan Async Await, biasanya kita perlu membuat terlebih dahulu function yang kita tandai sebagai "async"
// Ketika menggunakan "Module", secara default, global code adalah "Async", oleh karena itu kita bisa menggunakan Async Await
// Kecuali jika kita membuat function, maka function tersebut harus ditandai sebagai "Async" jika ingin menggunakan Async Await. Misal async await dalam satu function. function nameFunction(){ return await }

function samplePromise() {
  return Promise.resolve("Hadi");
}

const name = await samplePromise();
console.log(name);

// NOTED : Code diatas, tidak akan berjalan alias error kalau kita buat nya file .js. Global Async berlaku hanya di file .mjs (module).
// Jika ingin menggunakan async pada file .js, kita harus inisialisasi function nya dengan tanda "async". Contoh async function nameFunction(){}
