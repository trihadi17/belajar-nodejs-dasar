// EVENTS
// Events adalah standard library di NodeJs yang bisa digunakan sebagai implementasi Event Listener
// Di dalam Events, terdapat sebuah class bernama EventEmitter yang bisa digunakan untuk menampung data listener per jenis event.
// Lalu kita bisa melakukan emmit untuk mentrigger jenis event dan mengirim data ke event tersebut
// https://nodejs.org/dist/latest-v16.x/docs/api/events.html

import { EventEmitter } from "events";

const emitter = new EventEmitter();

emitter.addListener("hello", (name) => {
  console.log(`Hello ${name}`);
});
emitter.addListener("hello", (name) => {
  console.log(`Hello ${name}`);
});

emitter.emit("hello", "Hadi"); // ini mentrigger atau menjalankan eventlistener. Sama kan dengan nama listener nya. Secara otomatis akan memanggil semua listener
