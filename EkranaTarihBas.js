const tarih = new Date();
const gun   = tarih.getDate();
const ay    = tarih.getMonth();
const yil   = tarih.getFullYear();

console.log(`${gun}/${ay}/${yil}`);
