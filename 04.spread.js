//menggabungkan array

const arr = [1, 2, 3];
const arr2 = [4, 5, 6];
const gabungan = [...arr, ...arr2];

//menggunakan array ES5
console.log (arr.concat(arr2));

//menggunakan array ES6
console.log(...arr, ...arr2);
console.log(gabungan);

function tambah (x,y,z) {
	return x + y + z;
}

const arr3 = [4,6,9];
console.log(tambah(...arr3));


