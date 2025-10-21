// REPORT
// Report merupakan fitur yang terdapat di NodeJS untuk membuat laporan secara otomatis dalam file ketika sesuatu terjadi pada aplikasi NodeJS kita
// https://nodejs.org/dist/latest-v16.x/docs/api/report.html
// NOTED : Hasil keluaran dari report ini berbentuk file JSON

import process from "process";

process.report.reportOnFatalError = true;
process.report.reportOnUncaughtException = true;
process.report.reportOnSignal = true;
process.report.filename = "report.json"; // file report

function sampleError() {
  throw new Error("Ups");
}

sampleError();
