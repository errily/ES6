//ES5
//global scope
/* memory leak
tumpang tindih
*/

var a = 12;

/** const nilainya tetap tapi dapat mendeklarsikan di beda scope */
const c = 13;

var a = 13;
let d = "Halo";
{ let d="Halo juga";
  const c = 14;
    console.log('lokal ' + c);
console.log(d);
}
console.log(a);
console.log(c);