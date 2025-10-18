// DNS
// DNS merupakan standard library yang bisa digunakan untuk bekerja dengan DNS(Domain Name Server)
// https://nodejs.org/dist/latest-v16.x/docs/api/dns.html
// NOTED : Rekomendasi untuk menggunakan yang "Promise" dilink diatas

import dns from "dns/promises"; // ini meggnuakan versi "Promise", dia ada callback,dll

const address = await dns.lookup("www.programmerzamannow.com"); // melihat hostname

console.log(address.address); // ipaddress -> 185.199.109.153
console.log(address.family); // ipversion -> 4

// EXPLORE SENDIRI UNTUK YANG LAIN
