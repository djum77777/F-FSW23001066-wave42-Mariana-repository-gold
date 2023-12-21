//belajar function dlm javascript
//format function name(parameter1,paramater2,paramater3,...) {process}
let nominalBelanja,nominalDiskon;
function diskon(a,b){
    nominalBelanja=b;
    nominalDiskon=a;
    stlhDiskon = nominalBelanja-nominalDiskon;
    return stlhDiskon;
    return nominalBelanja;
    return nominalDiskon;
     //harus mengembalikan nilai ini biar bisa dipanggil di proses berikutnya
    }
let total = diskon(5000,100000); //deklarasi variabel untuk menampung fungsi
console.log (total);

if ((nominalDiskon+nominalBelanja) >= 100000) {
    console.log ("free goodie bag");
}




