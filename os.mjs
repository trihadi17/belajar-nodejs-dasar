// OS
// OS merupakan standar libray yang bisa digunakan untuk mendapatkan informasi tentang operasti yang digunakan
// https://nodejs.org/dist/latest-v16.x/docs/api/os.html

import os from "os";

console.log(os.platform());
console.log(os.arch());
console.table(os.cpus());
console.log(os.uptime());
console.log(os.totalmem());
console.log(os.freemem());
console.table(os.networkInterfaces());
