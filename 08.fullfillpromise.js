/*
const executrorFunction = (resolve, reject) => {
    const isCoffeeMakerReady = true;
    if (isCoffeeMakerReady){
        resolve("Kopi berhasil dibuat");
    } else {
        reject("Mesin kopi tidak bisa diguanakan!")
    }
}

const handlerSuccess = resolvedValue => {
    console.log(resolvedValue);
}

const makeCoffee = new Promise(executrorFunction);
makeCoffee.then(handlerSuccess)

promise merupakan suatu objek untuk membuat suatu kode kapan kode itu dipending 
kapan kode itu dijlaankan secara asyncronus. untuk membuat objek promise
menggunakan kunci new promise

JavaScript adalah bahasa pemrograman interpreted yang terkenal 
dengan gaya asynchronous-nya. Hal inilah menjadi salah satu faktor 
yang membuat JavaScript termasuk bahasa dengan performa yang cepat 
bahkan yang paling cepat jika dibandingkan dengan bahasa interpreted 
lainnya, seperti Perl, PHP, Python, Ruby, etc 

resolve untuk mengeksekusi bahwa promise itu harus berhasil
dr pending menjadi fullfill

reject untuk memberi alasan promise kenapa tidak terpenuhi

*/

const executrorFunction = (resolve, reject) => {
    const isCoffeeMakerReady = false;
    if (isCoffeeMakerReady){
        resolve("Kopi berhasil dibuat");
    } else {
        reject("Mesin kopi tidak bisa digunakan!")
    }
}

const handlerSuccess = resolvedValue => {
    console.log(resolvedValue);
}

const handlerRejected = rejectionValue => {
    console.log(rejectionValue);
}

const makeCoffee = new Promise(executrorFunction);
makeCoffee.then(handlerSuccess, handlerRejected)